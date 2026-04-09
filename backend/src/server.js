// import "dotenv/config";
// import "express-async-errors";
// import express from "express";
// import helmet from "helmet";
// import cors from "cors";
// import morgan from "morgan";
// import mongoSanitize from "express-mongo-sanitize";
// import rateLimit from "express-rate-limit";
// import authRoutes from "./routes/authRoutes.js";
// import jobRoutes from "./routes/jobRoutes.js";
// import applicationRoutes from "./routes/applicationRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import { connectDB } from "./config/db.js";
// import { errorHandler, notFound } from "./middlewares/errorHandler.js";
// import path from "path";

// const app = express();

// // Serve company mail PDFs statically so they can be linked in emails (too large for SMTP attachments)
// app.use("/public/pdfs", express.static(path.resolve("backend/src/companyMailPdf")));
// app.use("/public/pdfs", express.static(path.resolve("src/companyMailPdf")));


// app.use(helmet());
// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));
// app.use(express.json({ limit: "1mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(mongoSanitize());
// app.use(morgan("dev"));
// app.use(
//   "/api",
//   rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 200,
//     standardHeaders: true,
//     legacyHeaders: false,
//   })
// );

// app.get("/api/health", (_, res) => res.json({ status: "ok" }));
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationRoutes);
// app.use("/api/contact-leads", contactRoutes);

// app.use(notFound);
// app.use(errorHandler);
// const port = process.env.PORT || 5000;
// connectDB()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("DB connection failed", error);
//     process.exit(1);
//   });



import "dotenv/config";
import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDB } from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

//  SEO meta function import
import { resolveRouteMeta, DEFAULT_OG_IMAGE } from "../../src/app/seo/route-meta.js";

const app = express();

/*  PATH SETUP  */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../../dist");
const INDEX_FILE = path.join(DIST_DIR, "index.html");

/*  BASIC MIDDLEWARE  */
app.use("/public/pdfs", express.static(path.resolve("backend/src/companyMailPdf")));
app.use("/public/pdfs", express.static(path.resolve("src/companyMailPdf")));

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(morgan("dev"));

app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

/* API ROUTES  */
app.get("/api/health", (_, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/contact-leads", contactRoutes);

/* SEO FUNCTIONS */
const SITE_NAME = "Key Concepts";
const SITE_URL = (process.env.SITE_URL || "https://v2.keyconcepts.co.in").replace(/\/$/, "");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const stripManagedMeta = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta[^>]+name=["']title["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']keywords["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "");

const buildMetaBlock = ({ pathname, title, description, keywords, ogImage }) => {
  const cleanedPath = pathname === "/" ? "" : pathname;
  const canonical = `${SITE_URL}${cleanedPath}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return `
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="title" content="${escapeHtml(fullTitle)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    ${keywords ? `<meta name="keywords" content="${escapeHtml(keywords)}" />` : ""}
    <link rel="canonical" href="${escapeHtml(canonical)}" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
  `;
};

const injectMeta = (template, pathname) => {
  const routeMeta = resolveRouteMeta(pathname);
  const base = stripManagedMeta(template);
  const metaBlock = buildMetaBlock({
    pathname,
    title: routeMeta.title,
    description: routeMeta.description,
    keywords: routeMeta.keywords,
    ogImage: routeMeta.ogImage,
  });

  return base.replace("</head>", `${metaBlock}\n</head>`);
};

/* FRONTEND SERVE  */
app.use(express.static(DIST_DIR, { index: false }));

app.get("/{*any}", async (req, res) => {
  try {
    const rawHtml = await fs.readFile(INDEX_FILE, "utf8");
    const html = injectMeta(rawHtml, req.path || "/");

    res.status(200).set("Content-Type", "text/html").send(html);
  } catch (err) {
    res.status(500).send("Error loading page");
  }
});

app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed", error);
    process.exit(1);
  });
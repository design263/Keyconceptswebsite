import {
  pageSeo,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
} from "../../../nextjs-keyconcepts/src/lib/seo.js";

const pathIndex = Object.values(pageSeo).reduce((acc, page) => {
  if (page.path) acc[page.path] = page;
  return acc;
}, {});

const defaultMeta = {
  title: SITE_NAME,
  description:
    "Key Concepts is a Surat-based web, app, and software development company since 2009.",
  keywords: undefined,
  ogImage: DEFAULT_OG_IMAGE,
};

export { DEFAULT_OG_IMAGE };

export function resolveRouteMeta(pathname = "/") {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const page = pathIndex[normalized];

  if (!page) {
    return defaultMeta;
  }

  const title =
    typeof page.title === "object" && page.title.absolute
      ? page.title.absolute
      : page.title;

  return {
    title,
    description: page.description,
    keywords: page.keywords,
    ogImage: page.image ?? DEFAULT_OG_IMAGE,
  };
}

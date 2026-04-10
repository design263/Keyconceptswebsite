import { notFound } from "next/navigation";
import { buildRouteMetadata } from "@/app/seo/next-metadata";
import RouteRenderer from "../route-renderer";

const STATIC_ROUTES = new Set([
  "services",
  "about",
  "our-story",
  "process",
  "blog",
  "contact",
  "visitor-management",
  "branding-services",
  "web-solutions",
  "mobile-development",
  "odoo-erp",
  "product-development",
  "mvp-studio",
  "support-maintenance",
  "younited-communities",
  "election-mobilization",
  "careers",
]);

const toPathname = (slug = []) => {
  if (!slug.length) return "/";
  return `/${slug.join("/")}`;
};

export const generateMetadata = async ({ params }) => {
  const slug = params?.slug || [];
  return buildRouteMetadata(toPathname(slug));
};

export default function PublicCatchAllPage({ params }) {
  const slug = params?.slug || [];
  const path = slug.join("/");
  const isStatic = slug.length === 1 && STATIC_ROUTES.has(path);
  const isDynamic =
    (slug[0] === "blog" && slug.length === 2) ||
    (slug[0] === "careers" && slug.length === 2) ||
    (slug[0] === "case-study" && slug.length === 2) ||
    path === "insights/trends" ||
    path === "insights/case-studies";

  if (!isStatic && !isDynamic) notFound();
  return <RouteRenderer slug={slug} />;
}

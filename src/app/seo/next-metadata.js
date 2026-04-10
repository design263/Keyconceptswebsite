import { resolveRouteMeta } from "@/app/seo/route-meta";

const SITE_NAME = "Key Concepts";
const DEFAULT_BASE_URL = "https://v2.keyconcepts.co.in";

const toAbsoluteUrl = (value, baseUrl) => {
  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return value;
  }
};

export const getSiteBaseUrl = () => process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_BASE_URL;

export const buildRouteMetadata = (pathname) => {
  const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+/, "")}`;
  const routeMeta = resolveRouteMeta(normalizedPath);
  const baseUrl = getSiteBaseUrl();
  const canonicalUrl = toAbsoluteUrl(normalizedPath, baseUrl);
  const ogImageUrl = toAbsoluteUrl(routeMeta.ogImage, baseUrl);

  return {
    metadataBase: new URL(baseUrl),
    title: routeMeta.title,
    description: routeMeta.description,
    keywords: routeMeta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: canonicalUrl,
      title: routeMeta.title,
      description: routeMeta.description,
      images: [
        {
          url: ogImageUrl,
          alt: routeMeta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: routeMeta.title,
      description: routeMeta.description,
      images: [ogImageUrl],
      site: "@KCITSindia",
      creator: "@KCITSindia",
    },
  };
};

import "./globals.css";
import "../styles/theme.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, TWITTER_HANDLE } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Web, App & Software Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
  keywords:
    "Key Concepts, web development, mobile app development, software development, UI UX design, Odoo ERP, custom software",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Web, App & Software Development`,
    description:
      "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: `${SITE_NAME} | Web, App & Software Development`,
    description:
      "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

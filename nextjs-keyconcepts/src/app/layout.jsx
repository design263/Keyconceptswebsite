import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";
import {
  SITE_NAME,
  SITE_URL,
  PRODUCTION_SITE_URL,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  TWITTER_HANDLE,
  trimMetaDescription,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL(PRODUCTION_SITE_URL),
  title: {
    default: `${SITE_NAME} | Web, App & Software Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description: trimMetaDescription(
    "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
  ),
  keywords:
    "Key Concepts, web development, mobile app development, software development, UI UX design, Odoo ERP, custom software",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Web, App & Software Development`,
    description: trimMetaDescription(
      "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
    ),
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: `${SITE_NAME} | Web, App & Software Development`,
    description: trimMetaDescription(
      "Key Concepts designs and develops websites, mobile apps, custom software, Odoo ERP solutions, branding, and digital products from Surat, India.",
    ),
    images: [DEFAULT_OG_IMAGE],
  },
};

import Script from "next/script";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PVTXDM9');`,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QFXQX2Y1YR"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QFXQX2Y1YR');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased font-sans" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PVTXDM9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

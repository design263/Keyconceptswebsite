import "./globals.css";
import "../styles/theme.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";

export const metadata = {
  title: "Key Concepts - Digital Solutions & Technology Services",
  description: "Transform your business with cutting-edge digital solutions, web development, mobile apps, and enterprise technology services.",
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

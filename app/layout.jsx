import "@/styles/index.css";
import Providers from "./providers";

export const metadata = {
  title: "Key Concepts",
  description: "Key Concepts IT services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

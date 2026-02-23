import { Outlet } from "react-router";
import { MegaMenuHeader } from "../components/mega-menu-header";
import { Footer } from "../components/footer";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenuHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
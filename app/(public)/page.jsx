import { buildRouteMetadata } from "@/app/seo/next-metadata";
import HomeRenderer from "./home-renderer";

export const generateMetadata = async () => buildRouteMetadata("/");

export default function PublicHomePage() {
  return <HomeRenderer />;
}

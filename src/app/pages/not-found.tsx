import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <Link to="/" className="text-[#f1592a] hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}

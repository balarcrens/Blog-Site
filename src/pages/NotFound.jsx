import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Seo
        title="404 – Page Not Found | Readora"
        description="The page you are looking for does not exist or has been moved."
      />

      <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-sm border">
        {/* Icon / Code */}
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Sorry, the page you are looking for doesn’t exist, has been removed,
          or the URL may be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Go to Home
          </Link>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Visit Blog
          </Link>
        </div>

        {/* Help text */}
        <p className="mt-6 text-xs text-gray-500">
          If you believe this is an error, please{" "}
          <Link to="/contact" className="underline hover:text-gray-700">
            contact us
          </Link>.
        </p>
      </div>
    </main>
  );
}
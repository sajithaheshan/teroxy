import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" noindex />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center">
        <FontAwesomeIcon icon={["fas", "triangle-exclamation"]} className="text-3xl text-blue-600 dark:text-cyan-400" />
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">404</h1>
        <p className="mt-2 text-[13.5px] text-slate-500 dark:text-slate-400">
          This page doesn't exist — but our live proxies still do.
        </p>
        <Link
          to="/"
          className="teroxy-btn mt-6 flex items-center gap-2 bg-blue-600 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={["fas", "house"]} />
          Back to Home
        </Link>
      </div>
    </>
  );
}

import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";
import { LEGAL_PAGES } from "@/data/legal";
import NotFound from "./NotFound";

const ICONS: Record<string, "scale-balanced" | "file-contract" | "triangle-exclamation" | "cookie-bite"> = {
  "privacy-policy": "cookie-bite",
  "terms-of-service": "file-contract",
  disclaimer: "triangle-exclamation",
  dmca: "scale-balanced",
};

export default function Legal() {
  const { slug = "" } = useParams();
  const page = LEGAL_PAGES[slug];

  if (!page) return <NotFound />;

  return (
    <>
      <SEO title={page.title} path={`/legal/${page.slug}`} description={page.intro} />
      <div className="mx-auto flex w-full max-w-[1800px] gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <aside className="hidden w-56 shrink-0 lg:block">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Legal</p>
          <nav className="mt-3 space-y-1">
            {Object.values(LEGAL_PAGES).map((p) => (
              <Link
                key={p.slug}
                to={`/legal/${p.slug}`}
                className={`block px-2.5 py-2 text-[13px] font-medium teroxy-btn ${
                  p.slug === slug
                    ? "bg-blue-50 text-blue-700 dark:bg-cyan-500/10 dark:text-cyan-400"
                    : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900"
                }`}
              >
                {p.title}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 max-w-3xl flex-1">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
            <FontAwesomeIcon icon={["fas", ICONS[slug] ?? "file-contract"]} className="text-blue-600 dark:text-cyan-400" />
            {page.title}
          </h1>
          <p className="mt-1 text-[12px] font-medium text-slate-400">Last updated: {page.updated}</p>
          <p className="mt-4 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">{page.intro}</p>

          <div className="mt-6 space-y-6">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-[14.5px] font-bold text-slate-800 dark:text-slate-100">{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i} className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
            {Object.values(LEGAL_PAGES).map((p) => (
              <Link
                key={p.slug}
                to={`/legal/${p.slug}`}
                className={`teroxy-btn px-3 py-1.5 text-[12px] font-semibold ${
                  p.slug === slug
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-slate-500 dark:border-slate-700"
                }`}
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

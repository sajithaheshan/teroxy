import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PROXY_SOURCES } from "@/data/sources";
import { useProxies } from "@/hooks/useProxies";

export default function SourcesSection() {
  const { data } = useProxies();

  return (
    <section className="w-full border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
              <FontAwesomeIcon icon={["fab", "github"]} />
              Monitored GitHub Repositories
            </h2>
            <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
              teroxy re-fetches these repos live on every visit — no scraping into a database, ever.
            </p>
          </div>
          <Link
            to="/sources"
            className="teroxy-btn flex w-fit items-center gap-1.5 border border-slate-200 px-3 py-2 text-[12.5px] font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
          >
            View all sources <FontAwesomeIcon icon={["fas", "arrow-right"]} className="text-[10px]" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROXY_SOURCES.map((source) => (
            <a
              key={source.id}
              href={source.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn group flex items-center justify-between gap-2 border border-slate-200 bg-white px-3.5 py-3 transition-colors hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-700"
            >
              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold text-slate-800 dark:text-slate-100">
                  {source.owner}
                </p>
                <p className="truncate text-[11px] text-slate-400">{source.repo}</p>
                <div className="mt-1.5 flex items-center gap-2 text-[10.5px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={["fas", "rotate"]} className="text-[9px]" />
                    {source.refresh}
                  </span>
                  <span className="flex items-center gap-1 font-mono-tech text-blue-600 dark:text-cyan-400">
                    {data?.sourceStats?.[source.id] ?? "—"} found
                  </span>
                </div>
              </div>
              <FontAwesomeIcon
                icon={["fas", "arrow-up-right-from-square"]}
                className="shrink-0 text-[11px] text-slate-300 transition-colors group-hover:text-blue-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

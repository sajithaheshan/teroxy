import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";
import { PROXY_SOURCES, REFERENCE_REPOS } from "@/data/sources";
import { useProxies } from "@/hooks/useProxies";

export default function SourcesPage() {
  const { data } = useProxies();

  return (
    <>
      <SEO
        title="GitHub Sources"
        path="/sources"
        description="The full list of frequently-updated GitHub repositories teroxy aggregates live Telegram MTProto proxies from."
      />
      <div className="mx-auto w-full max-w-[1800px] px-4 py-10 sm:px-6 lg:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          <FontAwesomeIcon icon={["fab", "github"]} />
          GitHub Sources
        </h1>
        <p className="mt-2 max-w-2xl text-[13.5px] text-slate-500 dark:text-slate-400">
          teroxy is 100% database-free. Every proxy shown on the homepage is fetched live, in your
          browser, from the repositories below. If an upstream repo goes offline, teroxy simply skips it —
          nothing ever gets stuck showing an expired proxy.
        </p>

        <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-slate-400">
          Live aggregation sources ({PROXY_SOURCES.length})
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {PROXY_SOURCES.map((source) => (
            <a
              key={source.id}
              href={source.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn group flex items-center justify-between gap-2 border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold text-slate-800 dark:text-slate-100">{source.label}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={["fas", "rotate"]} className="text-[9px]" /> {source.refresh}
                  </span>
                  <span className="font-mono-tech text-blue-600 dark:text-cyan-400">
                    {data?.sourceStats?.[source.id] ?? "—"} proxies now
                  </span>
                </div>
              </div>
              <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} className="shrink-0 text-slate-300 group-hover:text-blue-500" />
            </a>
          ))}
        </div>

        <h2 className="mt-10 text-sm font-bold uppercase tracking-wide text-slate-400">
          Reference toolkits &amp; ecosystem repos
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {REFERENCE_REPOS.map((repo) => (
            <a
              key={repo.id}
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn flex items-start justify-between gap-3 border border-slate-200 bg-white px-4 py-3.5 transition-colors hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <p className="text-[13px] font-bold text-slate-800 dark:text-slate-100">{repo.label}</p>
                <p className="mt-1 text-[12px] text-slate-500 dark:text-slate-400">{repo.description}</p>
              </div>
              <span className="teroxy-chip shrink-0 bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {repo.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

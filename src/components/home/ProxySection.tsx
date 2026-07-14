import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import Fuse from "fuse.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDebounce } from "use-debounce";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProxies } from "@/hooks/useProxies";

dayjs.extend(relativeTime);
import { PROXY_SOURCES } from "@/data/sources";
import ProxyCard from "./ProxyCard";
import QrModal from "@/components/common/QrModal";
import type { TelegramProxy } from "@/lib/parseProxies";

const PAGE_SIZE = 12;

export default function ProxySection() {
  const { data, isLoading, isError, isFetching, refetch, dataUpdatedAt } = useProxies();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 250);
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [page, setPage] = useState(0);
  const [activeProxy, setActiveProxy] = useState<TelegramProxy | null>(null);

  const allProxies = data?.proxies ?? [];

  const bySource = useMemo(
    () => (sourceFilter === "all" ? allProxies : allProxies.filter((p) => p.sourceId === sourceFilter)),
    [allProxies, sourceFilter]
  );

  const fuse = useMemo(
    () => new Fuse(bySource, { keys: ["server", "sourceLabel"], threshold: 0.35 }),
    [bySource]
  );

  const filtered = useMemo(() => {
    if (!debouncedSearch.trim()) return bySource;
    return fuse.search(debouncedSearch).map((r) => r.item);
  }, [debouncedSearch, bySource, fuse]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const resetPage = () => setPage(0);

  return (
    <section id="proxies" className="w-full scroll-mt-20 bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1800px] px-4 pb-16 pt-8 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
              <FontAwesomeIcon icon={["fas", "server"]} className="text-blue-600 dark:text-cyan-400" />
              Live Proxy Directory
            </h2>
            <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
              {isLoading
                ? "Fetching live proxies from GitHub…"
                : `${filtered.length.toLocaleString()} working proxies aggregated from ${PROXY_SOURCES.length} sources${
                    dataUpdatedAt ? ` · synced ${dayjs(dataUpdatedAt).fromNow()}` : ""
                  }`}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="teroxy-btn relative flex h-9 w-full items-center border border-slate-200 bg-white px-2.5 dark:border-slate-700 dark:bg-slate-900 sm:w-56">
              <FontAwesomeIcon icon={["fas", "search"]} className="text-xs text-slate-400" />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetPage();
                }}
                placeholder="Search server or source…"
                className="ml-2 w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
            </div>

            <div className="teroxy-btn flex h-9 items-center gap-1.5 border border-slate-200 bg-white px-2.5 dark:border-slate-700 dark:bg-slate-900">
              <FontAwesomeIcon icon={["fas", "filter"]} className="text-xs text-slate-400" />
              <select
                value={sourceFilter}
                onChange={(e) => {
                  setSourceFilter(e.target.value);
                  resetPage();
                }}
                className="bg-transparent text-[13px] outline-none dark:text-slate-100"
              >
                <option value="all">All sources</option>
                {PROXY_SOURCES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.owner}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => refetch()}
              className="teroxy-btn flex h-9 items-center gap-1.5 border border-slate-200 bg-white px-3 text-[13px] font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-600 dark:hover:text-cyan-400"
            >
              <FontAwesomeIcon icon={["fas", "rotate"]} className={isFetching ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {isLoading &&
            Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="teroxy-panel border border-slate-200 p-3.5 dark:border-slate-800">
                <Skeleton height={16} width="70%" />
                <Skeleton height={12} width="50%" style={{ marginTop: 8 }} />
                <Skeleton height={28} style={{ marginTop: 12 }} />
              </div>
            ))}

          {!isLoading && isError && (
            <div className="col-span-full teroxy-panel border border-amber-200 bg-amber-50 p-6 text-center text-sm text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">
              <FontAwesomeIcon icon={["fas", "triangle-exclamation"]} className="mb-2 text-xl" />
              <p>Couldn't reach GitHub right now. Please hit refresh in a moment.</p>
            </div>
          )}

          {!isLoading && !isError && paged.length === 0 && (
            <div className="col-span-full teroxy-panel border border-slate-200 p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              No proxies match your search.
            </div>
          )}

          {!isLoading &&
            paged.map((proxy) => <ProxyCard key={proxy.id} proxy={proxy} onOpenQr={setActiveProxy} />)}
        </div>

        {!isLoading && filtered.length > PAGE_SIZE && (
          <div className="mt-8 flex justify-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FontAwesomeIcon icon={["fas", "chevron-right"]} className="text-[11px]" />}
              previousLabel={<FontAwesomeIcon icon={["fas", "chevron-left"]} className="text-[11px]" />}
              onPageChange={(e) => setPage(e.selected)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              forcePage={page}
              containerClassName="flex items-center gap-1.5 flex-wrap justify-center"
              pageLinkClassName="flex h-8 w-8 items-center justify-center teroxy-btn border border-slate-200 text-[12px] font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-600"
              activeLinkClassName="!bg-blue-600 !text-white !border-blue-600 dark:!border-cyan-500 dark:!bg-cyan-600"
              previousLinkClassName="flex h-8 w-8 items-center justify-center teroxy-btn border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
              nextLinkClassName="flex h-8 w-8 items-center justify-center teroxy-btn border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
              breakLinkClassName="flex h-8 w-8 items-center justify-center text-slate-400 text-[12px]"
              disabledLinkClassName="opacity-40 pointer-events-none"
            />
          </div>
        )}
      </div>

      <QrModal proxy={activeProxy} onClose={() => setActiveProxy(null)} />
    </section>
  );
}

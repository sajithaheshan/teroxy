import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import pLimit from "p-limit";
import pRetry from "p-retry";
import { PROXY_SOURCES } from "@/data/sources";
import { parseProxiesFromText, dedupeProxies, type TelegramProxy } from "@/lib/parseProxies";

export interface AggregatedProxies {
  proxies: TelegramProxy[];
  sourceStats: Record<string, number>;
  failedSources: string[];
  fetchedAt: number;
}

const limit = pLimit(4);

async function fetchSource(sourceIndex: number) {
  const source = PROXY_SOURCES[sourceIndex];
  const bust = Math.floor(Date.now() / (5 * 60 * 1000)); // 5-minute cache-busting bucket
  const url = `${source.rawUrl}?cb=${bust}`;

  return pRetry(
    async () => {
      const res = await axios.get<string>(url, {
        responseType: "text",
        timeout: 12000,
        transformResponse: [(d) => d],
      });
      return { source, text: String(res.data) };
    },
    { retries: 2, minTimeout: 500 }
  );
}

async function fetchAllProxies(): Promise<AggregatedProxies> {
  const tasks = PROXY_SOURCES.map((_, i) => limit(() => fetchSource(i)));
  const settled = await Promise.allSettled(tasks);

  let all: TelegramProxy[] = [];
  const sourceStats: Record<string, number> = {};
  const failedSources: string[] = [];

  for (const result of settled) {
    if (result.status === "fulfilled") {
      const { source, text } = result.value;
      const parsed = parseProxiesFromText(text, source);
      sourceStats[source.id] = parsed.length;
      all = all.concat(parsed);
    } else {
      failedSources.push("unknown");
    }
  }

  const deduped = dedupeProxies(all);

  return {
    proxies: deduped,
    sourceStats,
    failedSources,
    fetchedAt: Date.now(),
  };
}

export function useProxies() {
  return useQuery({
    queryKey: ["teroxy-proxies"],
    queryFn: fetchAllProxies,
    staleTime: 4 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

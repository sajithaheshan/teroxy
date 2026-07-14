import hashSum from "hash-sum";
import type { ProxySource } from "@/data/sources";

export interface TelegramProxy {
  id: string;
  server: string;
  port: number;
  secret: string;
  sourceId: string;
  sourceLabel: string;
  tgLink: string;
  webLink: string;
}

// Matches both `tg://proxy?...` and `https://t.me/proxy?...` style links,
// tolerant of casing, url-encoded secrets, and surrounding markdown/HTML.
const PROXY_LINK_RE =
  /(?:tg:\/\/proxy|t\.me\/proxy|t\.me\/socks)\?[^\s"'<>)\]]*server=([^&\s"'<>]+)&(?:amp;)?port=(\d{1,5})&(?:amp;)?secret=([a-zA-Z0-9%_=+\-]+)/gi;

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function parseProxiesFromText(text: string, source: ProxySource): TelegramProxy[] {
  const results: TelegramProxy[] = [];
  const seen = new Set<string>();
  let match: RegExpExecArray | null;

  PROXY_LINK_RE.lastIndex = 0;
  while ((match = PROXY_LINK_RE.exec(text)) !== null) {
    const server = safeDecode(match[1]).replace(/\.$/, "").trim();
    const port = parseInt(match[2], 10);
    const secret = safeDecode(match[3]).trim();

    if (!server || !port || !secret || port > 65535) continue;

    const key = `${server.toLowerCase()}:${port}:${secret.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);

    results.push({
      id: hashSum(key),
      server,
      port,
      secret,
      sourceId: source.id,
      sourceLabel: source.label,
      tgLink: `tg://proxy?server=${encodeURIComponent(server)}&port=${port}&secret=${secret}`,
      webLink: `https://t.me/proxy?server=${encodeURIComponent(server)}&port=${port}&secret=${secret}`,
    });
  }

  return results;
}

export function dedupeProxies(proxies: TelegramProxy[]): TelegramProxy[] {
  const map = new Map<string, TelegramProxy>();
  for (const p of proxies) {
    const key = `${p.server.toLowerCase()}:${p.port}:${p.secret.toLowerCase()}`;
    if (!map.has(key)) map.set(key, p);
  }
  return Array.from(map.values());
}

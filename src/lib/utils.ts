import numeral from "numeral";
import type { TelegramProxy } from "./parseProxies";
import { SITE } from "@/data/content";

export function formatCount(n: number): string {
  if (n < 1000) return String(n);
  return numeral(n).format("0.[0]a").toUpperCase();
}

export function truncateMiddle(str: string, max = 26): string {
  if (str.length <= max) return str;
  const half = Math.floor((max - 3) / 2);
  return `${str.slice(0, half)}...${str.slice(str.length - half)}`;
}

export function buildCaption(proxy: TelegramProxy): string {
  return [
    `⚡ Telegram MTProto Proxy — via ${SITE.name}`,
    "",
    `Server: ${proxy.server}`,
    `Port: ${proxy.port}`,
    `Secret: ${proxy.secret}`,
    "",
    `Connect: ${proxy.tgLink}`,
    `Web link: ${proxy.webLink}`,
    "",
    `Source: ${proxy.sourceLabel}`,
    `Discover more free proxies at ${SITE.domain}`,
  ].join("\n");
}

export function proxyFlagGuess(server: string): string {
  const tld = server.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, string> = {
    ir: "🇮🇷",
    ru: "🇷🇺",
    de: "🇩🇪",
    nl: "🇳🇱",
    fr: "🇫🇷",
    uk: "🇬🇧",
    us: "🇺🇸",
    cn: "🇨🇳",
    ua: "🇺🇦",
    fi: "🇫🇮",
    info: "🌐",
    space: "🌐",
    online: "🌐",
    lol: "🌐",
    ink: "🌐",
    club: "🌐",
  };
  return map[tld] ?? "🌍";
}

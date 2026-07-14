// teroxy — Live GitHub proxy source registry
// These repositories publish auto-updated / bot-refreshed Telegram MTProto
// proxy lists. We never store proxies ourselves — every page load pulls the
// freshest data straight from GitHub's raw CDN (which is CORS-enabled),
// so nothing on teroxy can ever go "stale" or "expired" by design.

export interface ProxySource {
  id: string;
  owner: string;
  repo: string;
  label: string;
  rawUrl: string;
  repoUrl: string;
  refresh: string;
  live: boolean;
}

export const PROXY_SOURCES: ProxySource[] = [
  {
    id: "solispirit",
    owner: "SoliSpirit",
    repo: "mtproto",
    label: "SoliSpirit / mtproto",
    rawUrl: "https://raw.githubusercontent.com/SoliSpirit/mtproto/master/all_proxies.txt",
    repoUrl: "https://github.com/SoliSpirit/mtproto",
    refresh: "Every 12 hours",
    live: true,
  },
  {
    id: "grim1313",
    owner: "Grim1313",
    repo: "mtproto-for-telegram",
    label: "Grim1313 / mtproto-for-telegram",
    rawUrl: "https://raw.githubusercontent.com/Grim1313/mtproto-for-telegram/master/all_proxies.txt",
    repoUrl: "https://github.com/Grim1313/mtproto-for-telegram",
    refresh: "Every 12 hours",
    live: true,
  },
  {
    id: "mcny2809",
    owner: "mcny2809",
    repo: "mtproto-for-telegram",
    label: "mcny2809 / mtproto-for-telegram",
    rawUrl: "https://raw.githubusercontent.com/mcny2809/mtproto-for-telegram/master/all_proxies.txt",
    repoUrl: "https://github.com/mcny2809/mtproto-for-telegram",
    refresh: "Every 12 hours",
    live: true,
  },
  {
    id: "telegram-proxy",
    owner: "telegram-proxy",
    repo: "telegram-proxy",
    label: "telegram-proxy / telegram-proxy",
    rawUrl: "https://raw.githubusercontent.com/telegram-proxy/telegram-proxy/main/all_proxies.txt",
    repoUrl: "https://github.com/telegram-proxy/telegram-proxy",
    refresh: "Every 12 hours",
    live: true,
  },
  {
    id: "iwh3n",
    owner: "iwh3n",
    repo: "tg-proxy",
    label: "iwh3n / tg-proxy",
    rawUrl: "https://raw.githubusercontent.com/iwh3n/tg-proxy/refs/heads/main/proxys/All_Proxys.txt",
    repoUrl: "https://github.com/iwh3n/tg-proxy",
    refresh: "Frequently",
    live: true,
  },
  {
    id: "argh94",
    owner: "Argh94",
    repo: "Proxy-List",
    label: "Argh94 / Proxy-List",
    rawUrl: "https://raw.githubusercontent.com/Argh94/Proxy-List/main/mtproto.txt",
    repoUrl: "https://github.com/Argh94/Proxy-List",
    refresh: "Every hour",
    live: true,
  },
  {
    id: "chumbayoumba",
    owner: "Chumbayoumba",
    repo: "free-telegram-proxy-russia-2026",
    label: "Chumbayoumba / free-telegram-proxy-russia-2026",
    rawUrl: "https://raw.githubusercontent.com/Chumbayoumba/free-telegram-proxy-russia-2026/main/proxies.txt",
    repoUrl: "https://github.com/Chumbayoumba/free-telegram-proxy-russia-2026",
    refresh: "Daily",
    live: true,
  },
  {
    id: "kort0881",
    owner: "kort0881",
    repo: "telegram-proxy-collector",
    label: "kort0881 / telegram-proxy-collector",
    rawUrl: "https://raw.githubusercontent.com/kort0881/telegram-proxy-collector/main/proxy_all.txt",
    repoUrl: "https://github.com/kort0881/telegram-proxy-collector",
    refresh: "Every 3 hours",
    live: true,
  },
];

// Additional community repositories we track & credit, but do not pull
// raw proxy data from directly (proxy server software / toolkits rather
// than plain lists). Shown on the Sources page for transparency.
export interface ReferenceRepo {
  id: string;
  label: string;
  description: string;
  repoUrl: string;
  tag: string;
}

export const REFERENCE_REPOS: ReferenceRepo[] = [
  {
    id: "an-ivannikov",
    label: "an-ivannikov / mtproto-proxy-server",
    description: "Self-hosted MTProto proxy server + web installer used by many independent proxy operators.",
    repoUrl: "https://github.com/an-ivannikov/mtproto-proxy-server",
    tag: "Toolkit",
  },
  {
    id: "sleep3r",
    label: "sleep3r / mtproto.zig",
    description: "High-performance MTProto proxy daemon written in Zig with automatic DPI-bypass modules.",
    repoUrl: "https://github.com/sleep3r/mtproto.zig",
    tag: "Toolkit",
  },
  {
    id: "spatiumstas",
    label: "spatiumstas / tg-ws-proxy-go",
    description: "Local MTProto proxy for embedded routers (Keenetic / OpenWrt) used to bypass Telegram throttling.",
    repoUrl: "https://github.com/spatiumstas/tg-ws-proxy-go",
    tag: "Toolkit",
  },
  {
    id: "flowseal",
    label: "Flowseal / tg-ws-proxy",
    description: "Maintains the Cloudflare-proxy domain fallback list consumed by several proxy daemons above.",
    repoUrl: "https://github.com/Flowseal/tg-ws-proxy",
    tag: "Reference",
  },
];

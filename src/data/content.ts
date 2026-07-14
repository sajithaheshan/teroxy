export const SITE = {
  name: "teroxy",
  tagline: "Live Telegram Proxies, Always Fresh",
  domain: "https://teroxy.netlify.app",
  description:
    "teroxy aggregates live, auto-updated Telegram MTProto proxies straight from trusted open-source GitHub repositories and Telegram channels — no database, no expired links, always in sync.",
  twitter: "@teroxy",
  email: "hello@teroxy.app",
};

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is a Telegram MTProto proxy?",
    a: "MTProto is Telegram's own proxy protocol. It re-routes your Telegram traffic through a third-party server so you can bypass ISP or government-level restrictions, without touching the rest of your device's internet traffic like a VPN would.",
  },
  {
    q: "Where does teroxy get its proxies from?",
    a: "teroxy does not run or store any proxies itself. Every time you load this page, we fetch fresh, plain-text proxy lists directly from a curated set of frequently-updated open-source GitHub repositories, parse them in your browser, remove duplicates, and display them instantly. See the Sources page for the full list.",
  },
  {
    q: "Why don't proxies expire on teroxy?",
    a: "Because we hold nothing in a database. There is nothing to go stale. The underlying repositories are refreshed by bots every 1–12 hours, and teroxy re-fetches them live, so the list you see is effectively as fresh as GitHub's CDN cache allows.",
  },
  {
    q: "Is it safe to use free MTProto proxies?",
    a: "MTProto proxies only encrypt/re-route your Telegram traffic, they cannot read your end-to-end encrypted secret chats. That said, a malicious proxy operator could technically see metadata such as timing and packet size. Avoid sending sensitive data through any third-party proxy and disconnect if a connection behaves unexpectedly.",
  },
  {
    q: "How do I connect to a proxy?",
    a: "Tap the ‘Connect’ button on any proxy card — on mobile this opens Telegram directly with the proxy pre-filled, just confirm with ‘Connect Proxy’. On desktop, Telegram Desktop will prompt the same dialog if installed, otherwise use the ‘Copy’ button and paste the details into Settings → Data and Storage → Proxy.",
  },
  {
    q: "Can I share a proxy with a friend?",
    a: "Yes — every card has a Share button that uses your device's native share sheet (or copies a ready-to-send caption) so you can forward a working proxy over any app in one tap.",
  },
  {
    q: "Do you track or log my activity?",
    a: "teroxy is a static site. We don't run a backend, we don't store proxy usage, and we don't require sign-up. Please read our Privacy Policy for full details.",
  },
];

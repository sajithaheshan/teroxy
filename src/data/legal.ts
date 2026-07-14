export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: Record<string, LegalPage> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "January 2026",
    intro:
      "teroxy is a static, front-end only website. We built it to respect your privacy by default — there is no account system, no server-side database, and no proxy usage logging.",
    sections: [
      {
        heading: "1. Information we do not collect",
        body: [
          "We do not require registration, and we never ask for personal information such as your name, phone number, or email address to use teroxy.",
          "We do not store which proxies you view, copy, or connect to. Proxy aggregation happens entirely in your browser via public GitHub CDN requests.",
        ],
      },
      {
        heading: "2. Information collected automatically",
        body: [
          "Like almost every website, our hosting provider (Netlify) and any analytics we enable may automatically log standard technical data such as your IP address, browser type, device type, and pages visited, for security and performance purposes only.",
          "This aggregate, anonymised data is never sold and is only used to keep teroxy fast and reliable.",
        ],
      },
      {
        heading: "3. Third-party sources",
        body: [
          "When you load teroxy, your browser fetches public proxy lists directly from third-party GitHub repositories (raw.githubusercontent.com) and may open links to third-party Telegram channels. Those services have their own privacy practices which we do not control.",
        ],
      },
      {
        heading: "4. Cookies & local storage",
        body: [
          "We use minimal, first-party local storage only to remember your light/dark theme preference. We do not use tracking cookies or third-party advertising pixels.",
        ],
      },
      {
        heading: "5. Changes to this policy",
        body: [
          "We may update this policy occasionally to reflect changes in the site. The 'last updated' date at the top of this page always reflects the latest revision.",
        ],
      },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    updated: "January 2026",
    intro:
      "By using teroxy, you agree to the following terms. Please read them carefully before connecting to any listed proxy.",
    sections: [
      {
        heading: "1. Nature of the service",
        body: [
          "teroxy is an informational aggregator. We index and display publicly available Telegram MTProto proxy configuration data published by independent third-party GitHub repositories and Telegram channels.",
          "We do not operate, host, or control any of the proxy servers listed on this site.",
        ],
      },
      {
        heading: "2. No warranty",
        body: [
          "Proxies are provided 'as is' with no guarantee of uptime, speed, security, or legality in your jurisdiction. Availability can change at any time as it depends entirely on the third-party operators of each proxy.",
        ],
      },
      {
        heading: "3. Acceptable use",
        body: [
          "You agree to use any information found on teroxy in compliance with the laws of your country and Telegram's own Terms of Service. You are solely responsible for how you use any proxy you connect to.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        body: [
          "teroxy, its operators and contributors are not liable for any direct or indirect damages, data loss, connectivity issues, or security incidents arising from the use of any third-party proxy listed on this site.",
        ],
      },
      {
        heading: "5. Changes",
        body: [
          "We may modify these Terms at any time. Continued use of teroxy after changes are posted constitutes acceptance of the new Terms.",
        ],
      },
    ],
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    updated: "January 2026",
    intro:
      "teroxy is an independent, community-driven aggregator and is not affiliated with, endorsed by, or connected to Telegram FZ-LLC in any way.",
    sections: [
      {
        heading: "Third-party content",
        body: [
          "All proxy server addresses, ports, and secrets displayed on teroxy originate from public, open-source GitHub repositories and public Telegram channels. We do not create, verify ownership of, or operate any of these servers.",
        ],
      },
      {
        heading: "No endorsement",
        body: [
          "Listing a repository or Telegram channel on teroxy is not an endorsement of that source. We simply aggregate publicly published data to make it easier to find in one place.",
        ],
      },
      {
        heading: "Use at your own risk",
        body: [
          "Free public proxies can be discontinued, rate-limited, or operated by unknown third parties. Never send sensitive credentials, payment details, or confidential files over a connection you do not fully trust.",
        ],
      },
    ],
  },
  dmca: {
    slug: "dmca",
    title: "DMCA & Takedown Policy",
    updated: "January 2026",
    intro:
      "teroxy respects intellectual property rights and responds promptly to legitimate takedown requests concerning content indexed on this site.",
    sections: [
      {
        heading: "Scope",
        body: [
          "teroxy does not host any proxy server, proxy list file, or Telegram channel content. We only display publicly accessible data retrieved live from third-party GitHub repositories at the moment you visit the page.",
        ],
      },
      {
        heading: "Filing a request",
        body: [
          "If you are the owner of a listed repository or channel and would like it removed from our source registry, contact us at the email listed on our Contact page with the source name and repository/channel link, and we will remove it within a reasonable timeframe.",
        ],
      },
    ],
  },
};

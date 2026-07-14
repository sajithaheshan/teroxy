import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";
import { SITE } from "@/data/content";
import { PROXY_SOURCES } from "@/data/sources";
import { PROXY_CHANNELS } from "@/data/channels";

const PILLARS = [
  { icon: "database" as const, title: "Zero database", desc: "We store nothing server-side. Every proxy is fetched fresh from GitHub in your own browser." },
  { icon: "rotate" as const, title: "Always in sync", desc: "Sources refresh every hour to every 12 hours upstream — teroxy re-polls every 5 minutes." },
  { icon: "shield-halved" as const, title: "Transparent sourcing", desc: "Every listed repository and channel is linked openly. No black-box scraping." },
  { icon: "gauge-high" as const, title: "Built for speed", desc: "A lean static site — no heavy backend, no bloated animation, just fast access." },
];

export default function About() {
  return (
    <>
      <SEO title="About" path="/about" description={`Learn how ${SITE.name} aggregates live Telegram proxies without a database.`} />
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          <FontAwesomeIcon icon={["fas", "layer-group"]} className="text-blue-600 dark:text-cyan-400" />
          About {SITE.name}
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
          {SITE.name} was built on a simple idea: instead of maintaining our own proxy servers or a
          database that inevitably goes stale, we let the open-source community do what it already does
          best — publish fresh, bot-verified MTProto proxies to GitHub every few hours. We just aggregate,
          deduplicate, and present it beautifully.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
          Right now that means pulling from {PROXY_SOURCES.length} actively-monitored repositories and
          pointing you to {PROXY_CHANNELS.length} trusted Telegram channels — with zero risk of an
          "expired proxy" ever being cached on our end.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="teroxy-panel flex gap-3 border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                <FontAwesomeIcon icon={["fas", p.icon]} />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-slate-800 dark:text-slate-100">{p.title}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 teroxy-panel border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className="text-[13.5px] font-bold text-slate-800 dark:text-slate-100">Not affiliated with Telegram</h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
            {SITE.name} is an independent, community-built directory. We are not affiliated with, endorsed
            by, or connected to Telegram FZ-LLC in any official capacity.
          </p>
        </div>
      </div>
    </>
  );
}

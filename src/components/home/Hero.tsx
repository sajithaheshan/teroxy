import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import { useProxies } from "@/hooks/useProxies";
import { PROXY_SOURCES } from "@/data/sources";
import { PROXY_CHANNELS } from "@/data/channels";

export default function Hero() {
  const { data, isLoading } = useProxies();
  const total = data?.proxies.length ?? 0;

  return (
    <section className="relative w-full overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50/70 via-white to-white dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16"
      >
        <div className="max-w-2xl">
          <span className="teroxy-chip inline-flex items-center gap-1.5 border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:border-cyan-900 dark:bg-cyan-500/10 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 animate-pulse-dot bg-blue-600 dark:bg-cyan-400" />
            No database · No expiry · Always live
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Free Telegram Proxies, <span className="text-blue-600 dark:text-cyan-400">Fetched Live.</span>
          </h1>

          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
            teroxy pulls MTProto proxy lists directly from actively-maintained, bot-refreshed GitHub
            repositories the moment you open this page — so you never see a dead or expired proxy baked
            into a database. One tap to connect, copy, or share.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ScrollLink
              to="proxies"
              smooth
              duration={400}
              offset={-70}
              className="teroxy-btn flex cursor-pointer items-center gap-2 bg-blue-600 px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
            >
              <FontAwesomeIcon icon={["fas", "bolt"]} />
              Browse Live Proxies
            </ScrollLink>
            <a
              href="https://t.me/ProxyMTProto"
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn flex items-center gap-2 border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-bold text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-600"
            >
              <FontAwesomeIcon icon={["fab", "telegram"]} />
              Join on Telegram
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-3 lg:w-auto lg:min-w-[380px]">
          {[
            {
              icon: "server" as const,
              label: "Live proxies",
              value: isLoading ? null : total,
              suffix: "+",
            },
            {
              icon: "code-branch" as const,
              label: "GitHub sources",
              value: PROXY_SOURCES.length,
              suffix: "",
            },
            {
              icon: "telegram" as const,
              brand: true,
              label: "TG channels",
              value: PROXY_CHANNELS.length,
              suffix: "",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="teroxy-panel flex flex-col items-center justify-center border border-slate-200 bg-white/80 p-4 text-center backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
            >
              <FontAwesomeIcon
                icon={stat.brand ? ["fab", stat.icon] : ["fas", stat.icon]}
                className="mb-1.5 text-blue-600 dark:text-cyan-400"
              />
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                {stat.value === null ? (
                  <span className="inline-block h-6 w-10 animate-pulse bg-slate-200 dark:bg-slate-700" />
                ) : (
                  <CountUp end={stat.value} duration={1.2} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-[10.5px] font-medium uppercase tracking-wide text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

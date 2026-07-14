import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PROXY_CHANNELS } from "@/data/channels";

export default function ChannelsSection() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
              <FontAwesomeIcon icon={["fab", "telegram"]} className="text-blue-500" />
              Trusted Telegram Proxy Channels
            </h2>
            <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
              Prefer joining a channel directly? These publish fresh MTProto proxies daily.
            </p>
          </div>
          <Link
            to="/channels"
            className="teroxy-btn flex w-fit items-center gap-1.5 border border-slate-200 bg-white px-3 py-2 text-[12.5px] font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            View all channels <FontAwesomeIcon icon={["fas", "arrow-right"]} className="text-[10px]" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PROXY_CHANNELS.map((channel) => (
            <a
              key={channel.id}
              href={`https://t.me/${channel.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn flex h-[62px] flex-col items-center justify-center gap-1 border border-slate-200 bg-white px-2 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-600 dark:hover:bg-cyan-500/5"
              title={`@${channel.username} · ${channel.subscribers} subscribers`}
            >
              <FontAwesomeIcon icon={["fab", "telegram"]} className="text-sm text-blue-500" />
              <span className="w-full truncate text-[10.5px] font-bold text-slate-700 dark:text-slate-200">
                @{channel.username}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

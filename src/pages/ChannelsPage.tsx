import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";
import { PROXY_CHANNELS } from "@/data/channels";

export default function ChannelsPage() {
  return (
    <>
      <SEO
        title="Telegram Proxy Channels"
        path="/channels"
        description="A curated list of active Telegram channels that publish free, working MTProto proxies."
      />
      <div className="mx-auto w-full max-w-[1800px] px-4 py-10 sm:px-6 lg:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          <FontAwesomeIcon icon={["fab", "telegram"]} className="text-blue-500" />
          Telegram Proxy Channels
        </h1>
        <p className="mt-2 max-w-2xl text-[13.5px] text-slate-500 dark:text-slate-400">
          These channels post new working MTProto proxies directly on Telegram. Join any of them for a
          constant stream of fresh servers alongside teroxy's live directory.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PROXY_CHANNELS.map((channel) => (
            <a
              key={channel.id}
              href={`https://t.me/${channel.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="teroxy-btn flex flex-col items-center justify-center gap-1.5 border border-slate-200 bg-white px-2 py-4 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-600"
            >
              <FontAwesomeIcon icon={["fab", "telegram"]} className="text-lg text-blue-500" />
              <span className="w-full truncate text-[11.5px] font-bold text-slate-700 dark:text-slate-200">
                @{channel.username}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <FontAwesomeIcon icon={["fas", "users"]} className="text-[9px]" /> {channel.subscribers}
              </span>
              <span className="teroxy-chip bg-slate-100 px-1.5 text-[9px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {channel.language}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

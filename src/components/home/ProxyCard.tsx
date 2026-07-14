import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import type { TelegramProxy } from "@/lib/parseProxies";
import { truncateMiddle, proxyFlagGuess } from "@/lib/utils";
import ActionButtons from "@/components/common/ActionButtons";

interface Props {
  proxy: TelegramProxy;
  onOpenQr: (proxy: TelegramProxy) => void;
}

export default function ProxyCard({ proxy, onOpenQr }: Props) {
  return (
    <div className="teroxy-panel group flex flex-col justify-between border border-slate-200 bg-white p-3.5 transition-colors hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-700">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[15px]">
            <span>{proxyFlagGuess(proxy.server)}</span>
            <span className="font-mono-tech text-[12.5px] font-semibold text-slate-800 dark:text-slate-100">
              {truncateMiddle(proxy.server, 24)}
            </span>
          </div>
          <span className="teroxy-chip bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            ACTIVE
          </span>
        </div>

        <div className="mt-2 flex items-center gap-3 font-mono-tech text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={["fas", "wifi"]} className="text-[10px]" /> :{proxy.port}
          </span>
          <span className="flex items-center gap-1 truncate">
            <FontAwesomeIcon icon={["fas", "key"]} className="text-[10px]" /> {truncateMiddle(proxy.secret, 14)}
          </span>
        </div>

        <div
          className="mt-2 flex items-center gap-1 text-[10.5px] text-slate-400"
          data-tooltip-id={`src-${proxy.id}`}
          data-tooltip-content={`Fetched live from ${proxy.sourceLabel}`}
        >
          <FontAwesomeIcon icon={["fas", "code-branch"]} className="text-[9px]" />
          <span className="truncate">{proxy.sourceLabel}</span>
          <Tooltip id={`src-${proxy.id}`} className="!text-[11px] !py-1 !px-2" />
        </div>
      </div>

      <div className="mt-3">
        <ActionButtons proxy={proxy} onOpenQr={onOpenQr} />
      </div>
    </div>
  );
}

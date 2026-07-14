import { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { QRCodeSVG } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TelegramProxy } from "@/lib/parseProxies";
import ActionButtons from "./ActionButtons";
import { buildCaption } from "@/lib/utils";

interface Props {
  proxy: TelegramProxy | null;
  onClose: () => void;
}

export default function QrModal({ proxy, onClose }: Props) {
  useEffect(() => {
    if (!proxy) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [proxy, onClose]);

  if (!proxy) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <FocusLock>
        <div className="teroxy-panel w-full max-w-sm border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Quick Connect</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="teroxy-btn flex h-7 w-7 items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <FontAwesomeIcon icon={["fas", "xmark"]} />
            </button>
          </div>

          <div className="mt-4 flex justify-center bg-white p-3">
            <QRCodeSVG value={proxy.tgLink} size={176} />
          </div>

          <div className="mt-4 space-y-1 font-mono-tech text-[12px] text-slate-600 dark:text-slate-300">
            <p><span className="text-slate-400">Server:</span> {proxy.server}</p>
            <p><span className="text-slate-400">Port:</span> {proxy.port}</p>
            <p className="break-all"><span className="text-slate-400">Secret:</span> {proxy.secret}</p>
          </div>

          <textarea
            readOnly
            value={buildCaption(proxy)}
            onFocus={(e) => e.currentTarget.select()}
            className="teroxy-panel mt-3 h-24 w-full resize-none border border-slate-200 bg-slate-50 p-2 font-mono-tech text-[11px] text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
          />

          <div className="mt-3">
            <ActionButtons proxy={proxy} compact />
          </div>
        </div>
      </FocusLock>
    </div>
  );
}

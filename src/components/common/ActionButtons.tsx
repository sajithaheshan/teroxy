import { useState } from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TelegramProxy } from "@/lib/parseProxies";
import { buildCaption } from "@/lib/utils";
import { SITE } from "@/data/content";

interface Props {
  proxy: TelegramProxy;
  onOpenQr?: (proxy: TelegramProxy) => void;
  compact?: boolean;
}

export default function ActionButtons({ proxy, onOpenQr, compact }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyCaption = () => {
    // Copies the FULL caption block (server/port/secret/links/source) at once
    copy(buildCaption(proxy));
    setCopied(true);
    toast.success("Full caption copied!");
    setTimeout(() => setCopied(false), 1600);
  };

  const handleShare = async () => {
    const caption = buildCaption(proxy);
    if (navigator.share) {
      try {
        await navigator.share({ title: `${SITE.name} proxy`, text: caption, url: proxy.webLink });
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    copy(caption);
    toast.success("Caption copied — share it anywhere!");
  };

  const btnBase =
    "teroxy-btn flex h-8 w-8 items-center justify-center border text-[13px] transition-colors border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-cyan-500 dark:hover:text-cyan-400";

  return (
    <div className="flex items-center gap-1.5">
      <a
        href={proxy.tgLink}
        className="teroxy-btn flex h-8 flex-1 items-center justify-center gap-1.5 bg-blue-600 px-2 text-[12px] font-bold text-white transition-colors hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={["fas", "bolt"]} className="text-[11px]" />
        Connect
      </a>
      <button onClick={handleCopyCaption} aria-label="Copy full caption" className={btnBase}>
        <FontAwesomeIcon icon={["fas", copied ? "check" : "copy"]} />
      </button>
      <button onClick={handleShare} aria-label="Share proxy" className={btnBase}>
        <FontAwesomeIcon icon={["fas", "share-nodes"]} />
      </button>
      {!compact && (
        <button onClick={() => onOpenQr?.(proxy)} aria-label="Show QR code" className={btnBase}>
          <FontAwesomeIcon icon={["fas", "qrcode"]} />
        </button>
      )}
    </div>
  );
}

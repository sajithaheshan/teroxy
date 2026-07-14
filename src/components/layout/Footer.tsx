import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SITE } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt={`${SITE.name} logo`} className="h-8 w-8 object-contain" />
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">{SITE.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
              {SITE.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://t.me/ProxyMTProto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="teroxy-btn flex h-8 w-8 items-center justify-center border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FontAwesomeIcon icon={["fab", "telegram"]} className="text-sm" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="teroxy-btn flex h-8 w-8 items-center justify-center border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FontAwesomeIcon icon={["fab", "github"]} className="text-sm" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Check out ${SITE.name} for live Telegram proxies: ${SITE.domain}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="teroxy-btn flex h-8 w-8 items-center justify-center border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} className="text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Explore</h4>
            <ul className="mt-3 space-y-2 text-[13px]">
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/#proxies">Live Proxies</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/channels">Telegram Channels</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/sources">GitHub Sources</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Company</h4>
            <ul className="mt-3 space-y-2 text-[13px]">
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/about">About</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/contact">Contact</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/sitemap.xml">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Legal</h4>
            <ul className="mt-3 space-y-2 text-[13px]">
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/legal/terms-of-service">Terms of Service</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/legal/disclaimer">Disclaimer</Link></li>
              <li><Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400" to="/legal/dmca">DMCA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800 sm:flex-row">
          <p>© {year} {SITE.name}. Not affiliated with Telegram FZ-LLC.</p>
          <p className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={["fas", "shield-halved"]} className="text-emerald-500" />
            Zero database · Aggregated live from open-source repositories
          </p>
        </div>
      </div>
    </footer>
  );
}

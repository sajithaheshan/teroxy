import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUiStore } from "@/store/uiStore";
import { useTheme } from "@/hooks/useTheme";
import { SITE } from "@/data/content";

const NAV_LINKS = [
  { label: "Home", to: "/", icon: "house" as const },
  { label: "Proxies", to: "/#proxies", icon: "server" as const },
  { label: "Channels", to: "/channels", icon: "telegram" as const, brand: true },
  { label: "Sources", to: "/sources", icon: "code-branch" as const },
  { label: "FAQ", to: "/faq", icon: "circle-info" as const },
  { label: "About", to: "/about", icon: "layer-group" as const },
];

export default function Header() {
  const { mobileNavOpen, setMobileNavOpen } = useUiStore();
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, setMobileNavOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"
          : "border-transparent bg-white dark:bg-slate-950"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt={`${SITE.name} logo`} className="h-8 w-8 object-contain" />
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            {SITE.name}
          </span>
          <span className="hidden teroxy-chip bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 sm:inline-flex items-center gap-1 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 bg-emerald-500 animate-pulse-dot" />
            live
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold transition-colors teroxy-btn ${
                  isActive && link.to !== "/#proxies"
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400"
                }`
              }
              end={link.to === "/"}
            >
              <FontAwesomeIcon icon={link.brand ? ["fab", link.icon] : ["fas", link.icon]} className="text-xs" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="teroxy-btn flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-cyan-400"
          >
            <FontAwesomeIcon icon={["fas", theme === "light" ? "moon" : "sun"]} className="text-sm" />
          </button>
          <a
            href="https://t.me/ProxyMTProto"
            target="_blank"
            rel="noopener noreferrer"
            className="teroxy-btn hidden items-center gap-1.5 bg-blue-600 px-3.5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-blue-700 sm:flex"
          >
            <FontAwesomeIcon icon={["fab", "telegram"]} />
            Open Telegram
          </a>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="teroxy-btn flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={["fas", mobileNavOpen ? "xmark" : "bars"]} />
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 border-b border-slate-100 py-3 text-sm font-semibold dark:border-slate-900 ${
                  isActive ? "text-blue-600 dark:text-cyan-400" : "text-slate-700 dark:text-slate-200"
                }`
              }
              end={link.to === "/"}
            >
              <FontAwesomeIcon icon={link.brand ? ["fab", link.icon] : ["fas", link.icon]} className="w-4 text-xs" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "@/components/layout/SEO";
import { FAQ_ITEMS } from "@/data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ"
        path="/faq"
        description="Answers to common questions about how teroxy aggregates live Telegram MTProto proxies."
      />
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          <FontAwesomeIcon icon={["fas", "circle-info"]} className="text-blue-600 dark:text-cyan-400" />
          Frequently Asked Questions
        </h1>

        <div className="mt-6 divide-y divide-slate-200 border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="bg-white dark:bg-slate-900">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="text-[13.5px] font-bold text-slate-800 dark:text-slate-100">{item.q}</span>
                  <FontAwesomeIcon
                    icon={["fas", "arrow-right"]}
                    className={`shrink-0 text-xs text-slate-400 transition-transform ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

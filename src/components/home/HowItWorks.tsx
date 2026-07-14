import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STEPS = [
  {
    icon: "hand-pointer" as const,
    title: "Pick a proxy",
    desc: "Browse live, deduplicated MTProto proxies sourced straight from GitHub — filter or search instantly.",
  },
  {
    icon: "bolt" as const,
    title: "Tap Connect",
    desc: "Opens Telegram directly with the server pre-filled via a tg://proxy deep link. No manual typing.",
  },
  {
    icon: "copy" as const,
    title: "Or copy the caption",
    desc: "One click copies the full server, port, secret & link block — ready to paste anywhere.",
  },
  {
    icon: "share-nodes" as const,
    title: "Share instantly",
    desc: "Use your device's native share sheet to send a working proxy to friends in one tap.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 lg:px-10">
        <h2 className="text-center text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
          How teroxy works
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-[13px] text-slate-500 dark:text-slate-400">
          Four steps between you and a working Telegram connection.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="teroxy-panel relative border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="absolute right-3 top-3 font-mono-tech text-[11px] font-bold text-slate-200 dark:text-slate-700">
                0{i + 1}
              </span>
              <div className="flex h-9 w-9 items-center justify-center bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                <FontAwesomeIcon icon={["fas", step.icon]} />
              </div>
              <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

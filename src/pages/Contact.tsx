import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import SEO from "@/components/layout/SEO";
import { SITE } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`teroxy contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail client…");
  };

  return (
    <>
      <SEO title="Contact" path="/contact" description={`Get in touch with the ${SITE.name} team.`} />
      <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-10">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
          <FontAwesomeIcon icon={["fas", "envelope"]} className="text-blue-600 dark:text-cyan-400" />
          Contact Us
        </h1>
        <p className="mt-2 text-[13.5px] text-slate-500 dark:text-slate-400">
          Found a broken source, want a repository removed, or just have feedback? Reach out below.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="teroxy-panel border border-slate-200 bg-white px-3 py-2.5 text-[13px] outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="teroxy-panel border border-slate-200 bg-white px-3 py-2.5 text-[13px] outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="teroxy-panel w-full border border-slate-200 bg-white px-3 py-2.5 text-[13px] outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          <button
            type="submit"
            className="teroxy-btn flex items-center gap-2 bg-blue-600 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            Send Message
          </button>
        </form>

        <div className="mt-8 flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
          <FontAwesomeIcon icon={["fas", "location-dot"]} />
          Or email us directly at{" "}
          <a className="font-semibold text-blue-600 dark:text-cyan-400" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
      </div>
    </>
  );
}

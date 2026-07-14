import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import ChannelsPage from "@/pages/ChannelsPage";
import SourcesPage from "@/pages/SourcesPage";
import Faq from "@/pages/Faq";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

function ErrorFallback() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <FontAwesomeIcon icon={["fas", "triangle-exclamation"]} className="text-2xl text-amber-500" />
      <h1 className="mt-3 text-lg font-bold text-slate-800 dark:text-slate-100">Something went wrong</h1>
      <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
        Please refresh the page. If the problem continues, try again shortly.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="teroxy-btn mt-4 bg-blue-600 px-4 py-2 text-[13px] font-bold text-white hover:bg-blue-700"
      >
        Reload
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="channels" element={<ChannelsPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal/:slug" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

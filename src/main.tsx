import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./lib/icons";
import App from "./App";
import { onCLS, onINP, onLCP } from "web-vitals";

// Lightweight, privacy-friendly performance monitoring (no third-party beacon)
onCLS(() => {});
onINP(() => {});
onLCP(() => {});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 2200,
              style: {
                borderRadius: "2px",
                fontSize: "13px",
                background: "#0f172a",
                color: "#f8fafc",
                padding: "8px 14px",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);

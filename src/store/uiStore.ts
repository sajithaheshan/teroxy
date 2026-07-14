import { create } from "zustand";
import type { TelegramProxy } from "@/lib/parseProxies";

interface UiState {
  activeProxy: TelegramProxy | null;
  openProxyModal: (proxy: TelegramProxy) => void;
  closeProxyModal: () => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  activeProxy: null,
  openProxyModal: (proxy) => set({ activeProxy: proxy }),
  closeProxyModal: () => set({ activeProxy: null }),
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
}));

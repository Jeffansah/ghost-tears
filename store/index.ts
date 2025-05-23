import { create } from "zustand";

interface AppStore {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
  showRulesModal: boolean;
  setShowRulesModal: (show: boolean) => void;
  checkAndShowRules: () => void;
}

export const useStore = create<AppStore>((set) => ({
  refresh: false,
  setRefresh: (refresh: boolean) => set({ refresh }),
  showRulesModal: false,
  setShowRulesModal: (show: boolean) => set({ showRulesModal: show }),
  checkAndShowRules: () => {
    const hasSeenRules = localStorage.getItem("ghost-tears-rules-seen");
    if (!hasSeenRules) {
      set({ showRulesModal: true });
    }
  },
}));

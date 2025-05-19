import { create } from "zustand";

interface RefreshStore {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export const useStore = create<RefreshStore>((set) => ({
  refresh: false,
  setRefresh: (refresh: boolean) => set({ refresh }),
}));

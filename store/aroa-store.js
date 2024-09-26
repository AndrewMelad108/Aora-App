import { create } from "zustand";

export const useAppStore = create((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  removeAllCounter: () => set({ counter: 0 }),
}));

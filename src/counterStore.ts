import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const counterStore = create<{
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}>()(
  devtools(
    persist(
      (set) => ({
        count: 1,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set(() => ({ count: 0 })),
      }),
      {
        name: 'count-store',
      },
    ),
  ),
);

export default counterStore;

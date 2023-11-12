import { create } from "zustand";

type StateProps = {
  isOpened: boolean;
  productsInCart: [];
};

type ActionProps = {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
};

type StoreProps = {
  state: StateProps;
  actions: ActionProps;
};

const initialState: StateProps = {
  isOpened: false,
  productsInCart: [],
};

export const useAsideCard = create<StoreProps>((set) => ({
  state: initialState,
  actions: {
    handleOpenCart: () =>
      set((prev) => ({
        state: { ...prev.state, isOpened: true },
      })),
    handleCloseCart: () =>
      set((prev) => ({
        state: { ...prev.state, isOpened: false },
      })),
  },
}));

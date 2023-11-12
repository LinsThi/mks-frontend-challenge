import { create } from "zustand";
import {
  CartProductsProps,
  ProductsProps,
} from "../../../queries/useQueryGetProducts/types/GetProducts";

type StateProps = {
  isOpened: boolean;
  productsInCart: CartProductsProps[];
};

type ActionProps = {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleAddItemInCart: (item: ProductsProps) => void;
  handleRemoveItemInCart: (itemID: number) => void;
  handleAddMoreQuantityItem: (itemID: number) => void;
  handleRemoveQuantityItem: (itemID: number) => void;
  getTotalValueForPurchase: () => string;
  buyAllProducts: () => {
    message: string;
    status: boolean;
  };
  verifyIfItemAlreadyExists: (itemID: number) => {
    indexProduct: number;
    alreadyExistsProduct: boolean;
  };
};

type StoreProps = {
  state: StateProps;
  actions: ActionProps;
};

const initialState: StateProps = {
  isOpened: false,
  productsInCart: [],
};

export const useAsideCart = create<StoreProps>((set, get) => ({
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
    handleAddItemInCart: (item: ProductsProps) => {
      const { alreadyExistsProduct } = get().actions.verifyIfItemAlreadyExists(
        item.id
      );

      if (alreadyExistsProduct) {
        return;
      }

      const productCart: CartProductsProps = {
        product: item,
        quantity: 1,
      };
      const currentProducts = get().state.productsInCart;
      currentProducts.push(productCart);

      set((prev) => ({
        state: {
          ...prev.state,
          productsInCart: [...currentProducts],
        },
      }));
    },
    handleRemoveItemInCart: (itemID: number) => {
      const { indexProduct, alreadyExistsProduct } =
        get().actions.verifyIfItemAlreadyExists(itemID);

      if (alreadyExistsProduct) {
        const currentListProducts = get().state.productsInCart;

        currentListProducts.splice(indexProduct, 1);
        set((prev) => ({
          state: {
            ...prev.state,
            productsInCart: [...currentListProducts],
          },
        }));
      }
    },
    handleAddMoreQuantityItem: (itemID: number) => {
      const { indexProduct, alreadyExistsProduct } =
        get().actions.verifyIfItemAlreadyExists(itemID);

      if (alreadyExistsProduct) {
        const currentListProducts = get().state.productsInCart;
        if (currentListProducts[indexProduct].quantity < 99) {
          currentListProducts[indexProduct].quantity += 1;

          set((prev) => ({
            state: {
              ...prev.state,
              productsInCart: [...currentListProducts],
            },
          }));
        }
      }
    },
    handleRemoveQuantityItem: (itemID: number) => {
      const { indexProduct, alreadyExistsProduct } =
        get().actions.verifyIfItemAlreadyExists(itemID);

      if (alreadyExistsProduct) {
        const currentListProducts = get().state.productsInCart;

        if (currentListProducts[indexProduct].quantity > 0) {
          currentListProducts[indexProduct].quantity -= 1;

          set((prev) => ({
            state: {
              ...prev.state,
              productsInCart: [...currentListProducts],
            },
          }));
        }
      }
    },
    getTotalValueForPurchase: () => {
      const currentListProducts = get().state.productsInCart;
      let valueTotal = 0;

      for (const { product, quantity } of currentListProducts) {
        valueTotal += quantity * Number(product.price);
      }

      return valueTotal.toString();
    },
    buyAllProducts: () => {
      const currentListProducts = get().state.productsInCart;

      if (currentListProducts.length === 0) {
        get().actions.handleCloseCart();

        return {
          message: "O carrinho está vazio!",
          status: false,
        };
      }

      set(() => ({ state: initialState }));

      return {
        message: "Produtos comprados com sucesso!",
        status: true,
      };
    },
    verifyIfItemAlreadyExists: (itemID: number) => {
      const allProducts = get().state.productsInCart;

      const indexObject = allProducts.findIndex(
        (currentItem) => currentItem.product.id === itemID
      );

      return {
        indexProduct: indexObject,
        alreadyExistsProduct: indexObject !== -1,
      };
    },
  },
}));

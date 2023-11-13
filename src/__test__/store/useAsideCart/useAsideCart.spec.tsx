import { useAsideCart } from "@components/AsideCart/store";
import { renderHook } from "@testing-library/react";

describe("useAsideCart", () => {
  it("should inicialize correct", () => {
    const { result } = renderHook(() => useAsideCart());

    expect(JSON.stringify(result.current.state)).toBe(
      JSON.stringify({
        isOpened: false,
        productsInCart: [],
      })
    );
  });

  it("should add product to cart", () => {
    const { result } = renderHook(() => useAsideCart());
    const { actions, state } = result.current;

    const quantityProductsBefore = state.productsInCart.length;

    actions.handleAddItemInCart({
      id: 1,
      name: "Product",
      description: "Description",
      price: "10",
      photo: "Image",
      brand: "Apple",
      createdAt: "",
      updatedAt: "",
    });

    const quantityProductsAfter = state.productsInCart.length;

    expect(quantityProductsBefore).toBeLessThan(quantityProductsAfter);
  });

  it("should remove product to cart", () => {
    const { result } = renderHook(() => useAsideCart());
    const { actions, state } = result.current;

    actions.handleAddItemInCart({
      id: 1,
      name: "Product",
      description: "Description",
      price: "10",
      photo: "Image",
      brand: "Apple",
      createdAt: "",
      updatedAt: "",
    });

    const quantityProductsBefore = state.productsInCart.length;

    actions.handleRemoveItemInCart(1);

    const quantityProductsAfter = state.productsInCart.length;

    expect(quantityProductsBefore).toBeGreaterThan(quantityProductsAfter);
  });

  it("should add more quantity product to cart", () => {
    const { result } = renderHook(() => useAsideCart());
    const { actions, state } = result.current;

    actions.handleAddItemInCart({
      id: 1,
      name: "Product",
      description: "Description",
      price: "10",
      photo: "Image",
      brand: "Apple",
      createdAt: "",
      updatedAt: "",
    });

    const quantityProductBefore = state.productsInCart[0].quantity;

    actions.handleAddMoreQuantityItem(1);

    const quantityProductAfter = state.productsInCart[0].quantity;

    expect(quantityProductBefore).toBeLessThan(quantityProductAfter);
  });

  it("should remove quantity product to cart", () => {
    const { result } = renderHook(() => useAsideCart());
    const { actions, state } = result.current;

    actions.handleAddItemInCart({
      id: 1,
      name: "Product",
      description: "Description",
      price: "10",
      photo: "Image",
      brand: "Apple",
      createdAt: "",
      updatedAt: "",
    });

    const quantityProductBefore = state.productsInCart[0].quantity;

    actions.handleRemoveQuantityItem(1);

    const quantityProductAfter = state.productsInCart[0].quantity;

    expect(quantityProductBefore).toBeGreaterThan(quantityProductAfter);
  });

  it("should return if product already exists in cart", () => {
    const { result } = renderHook(() => useAsideCart());
    const { actions } = result.current;

    const newProduct = {
      id: 1,
      name: "Product",
      description: "Description",
      price: "10",
      photo: "Image",
      brand: "Apple",
      createdAt: "",
      updatedAt: "",
    };

    const { alreadyExistsProduct } = actions.verifyIfItemAlreadyExists(
      newProduct.id
    );

    expect(alreadyExistsProduct).toBe(true);
  });
});

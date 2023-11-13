import AsideCart from "@components/AsideCart";
import Navigation from "@components/Navigation";
import theme from "@src/theme";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("AsideCart", () => {
  it("should close aside menu", async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme.light}>
        <AsideCart />
      </ThemeProvider>
    );

    const buttonClose = await findByTestId("button-close-aside-cart-menu");

    fireEvent.click(buttonClose);

    const asideMenu = await findByTestId("aside-cart-menu");

    expect(asideMenu).toHaveStyle("display: none");
  });

  it("not should show product with cart is empty", async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme.light}>
        <Navigation />

        <AsideCart />
      </ThemeProvider>
    );

    const spanQuantityItens = await findByTestId("product-quantity-cart");
    const quantityItensInCart = Number(spanQuantityItens.textContent as string);

    expect(quantityItensInCart).toBe(0);

    const asideListMenu = await findByTestId("aside-menu-cart-list");

    expect(asideListMenu.children.length).toBe(0);
  });
});

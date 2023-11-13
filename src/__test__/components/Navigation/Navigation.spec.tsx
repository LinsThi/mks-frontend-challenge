import Navigation from "@components/Navigation";
import AsideCart from "@components/AsideCart";
import theme from "@src/theme";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Navigation", () => {
  it("should open side menu", async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme.light}>
        <Navigation />

        <AsideCart />
      </ThemeProvider>
    );

    const cartButton = await findByTestId("navigation-cart-button");
    fireEvent.click(cartButton);

    const asideMenu = await findByTestId("aside-cart-menu");

    expect(asideMenu).toHaveStyle("display: inline");
  });
});

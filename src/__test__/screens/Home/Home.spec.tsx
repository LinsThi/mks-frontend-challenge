import theme from "@src/theme";
import Home from "@screens/Home";
import { render, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import Navigation from "@components/Navigation";

const client = new QueryClient();

describe("Home", () => {
  it("should render list 8 products", async () => {
    const { findAllByTestId } = render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme.light}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    );

    const allProducts = await findAllByTestId("product-component");

    expect(allProducts.length).toBe(8);
  });

  it("should be able to add new product in Cart", async () => {
    const { findAllByText, findByTestId } = render(
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme.light}>
          <Navigation />

          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    );

    const allButtons = await findAllByText("COMPRAR");
    const button = allButtons[0].closest("button") as HTMLButtonElement;

    const spanQuantityBefore = await findByTestId("product-quantity-cart");
    const productQuantityCartBefore = Number(
      spanQuantityBefore.textContent as string
    );

    fireEvent.click(button);

    const spanQuantityAfter = await findByTestId("product-quantity-cart");
    const productQuantityCartAfter = Number(
      spanQuantityAfter.textContent as string
    );

    expect(productQuantityCartBefore).toBeLessThan(productQuantityCartAfter);
  });
});

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("App.tsx", () => {
  it("should display elements header and footer", async () => {
    const { findByTestId } = render(<App />);

    const header = await findByTestId("navigation-header");
    const footer = await findByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});

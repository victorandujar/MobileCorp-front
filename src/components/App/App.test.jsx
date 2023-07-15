import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import App from "./App";

describe("Given an Aoo component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the web company name", () => {
      const companyName = "MobileCorp";

      renderWithProviders(<App />);

      const expectedHeader = screen.getByRole("heading", { name: companyName });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

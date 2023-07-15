import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../utils/testUtils/testUtils";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome to MobileCorp'", () => {
      const headingText = "Welcome to MobileCorp";

      renderWithProviders(<HomePage />, { wrapper: BrowserRouter });

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

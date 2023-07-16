import { BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome to MobileCorp'", async () => {
      const headerText = "Welcome to MobileCorp";

      let expectedHeader;

      renderWithProviders(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      await waitFor(
        () =>
          (expectedHeader = screen.getByRole("heading", { name: headerText })),
      );

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

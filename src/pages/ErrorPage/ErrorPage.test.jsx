import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import ErrorPage from "./ErrorPage";
import { BrowserRouter } from "react-router-dom";

describe("Given an ErrorPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Page not found'", () => {
      const headerText = "Page not found";

      renderWithProviders(
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>,
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

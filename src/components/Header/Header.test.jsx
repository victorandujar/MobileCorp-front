import Header from "./Header";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'MobileCorp'", () => {
      const headerText = "MobileCorp";

      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the web company name", () => {
      const companyName = "MobileCorp";

      renderWithProviders(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>,
      );

      const expectedHeader = screen.getByRole("heading", { name: companyName });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

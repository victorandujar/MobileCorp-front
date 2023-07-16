import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../utils/testUtils/testUtils";
import DetailPage from "./DetailPage";
import { screen } from "@testing-library/react";

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image mobile", () => {
      renderWithProviders(
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>,
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a list of specifications", () => {
      renderWithProviders(
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>,
      );

      const expectedList = screen.getByRole("list");

      expect(expectedList).toBeInTheDocument();
    });
  });
});

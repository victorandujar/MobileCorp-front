import { screen } from "@testing-library/react";
import MobileCard from "./MobileCard";
import { mobileMockAcer } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/testUtils";
import { BrowserRouter } from "react-router-dom";

describe("Given a MobileCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(
        <BrowserRouter>
          <MobileCard mobile={mobileMockAcer} />
        </BrowserRouter>,
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a header with the brand and the model of the mobile", () => {
      const headerText = "Acer Iconia Talk S";

      renderWithProviders(
        <BrowserRouter>
          <MobileCard mobile={mobileMockAcer} />
        </BrowserRouter>,
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should handle a falsy brand by showing an empty header", () => {
      const mobileMockWithEmptyBrand = { ...mobileMockAcer, brand: "" };
      const headerText = "Iconia Talk S";

      renderWithProviders(
        <BrowserRouter>
          <MobileCard mobile={mobileMockWithEmptyBrand} />
        </BrowserRouter>,
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

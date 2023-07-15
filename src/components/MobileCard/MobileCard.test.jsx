import { screen } from "@testing-library/react";
import MobileCard from "./MobileCard";
import { mobileMockAcer } from "../../mocks/mocks";

import renderWithProviders from "../../utils/testUtils/testUtils";

describe("Given a MobileCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      renderWithProviders(<MobileCard mobile={mobileMockAcer} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a header with the brand and the model of the mobile", () => {
      const headerText = "Acer - Iconia Talk S";

      renderWithProviders(<MobileCard mobile={mobileMockAcer} />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

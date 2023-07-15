import { screen } from "@testing-library/react";
import { mobileMockAcer } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/testUtils";
import MobileDetail from "./MobileDetail";

describe("Given a MobileDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Acer Iconia Talk S'", () => {
      const headingText = "Acer Iconia Talk S";

      renderWithProviders(<MobileDetail mobile={mobileMockAcer} />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

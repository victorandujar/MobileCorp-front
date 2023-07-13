import { render, screen } from "@testing-library/react";
import MobileCard from "./MobileCard";
import { mobileMockAcer } from "../../mocks/mocks";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Given a MobileCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      render(
        <ThemeProvider theme={theme}>
          <MobileCard mobile={mobileMockAcer} />
        </ThemeProvider>,
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a header with the brand and the model of the mobile", () => {
      const headerText = "Acer - Iconia Talk S";

      render(
        <ThemeProvider theme={theme}>
          <MobileCard mobile={mobileMockAcer} />
        </ThemeProvider>,
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

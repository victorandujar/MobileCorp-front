import { render, screen } from "@testing-library/react";
import MobileCardList from "./MobileCardList";
import { mobilesMockList } from "../../mocks/mocks";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Given a MobileCardList component", () => {
  describe("When it receives a list of 2 mobiles", () => {
    test("Then it should show each mobile brand and model", () => {
      render(
        <ThemeProvider theme={theme}>
          <MobileCardList mobiles={mobilesMockList} />
        </ThemeProvider>,
      );

      mobilesMockList.forEach((mobile) => {
        expect(
          screen.getByRole("heading", {
            name: `${mobile.brand} - ${mobile.model}`,
          }),
        ).toBeInTheDocument();
      });
    });

    test("Then it should show an image", () => {
      render(
        <ThemeProvider theme={theme}>
          <MobileCardList mobiles={mobilesMockList} />
        </ThemeProvider>,
      );

      mobilesMockList.forEach((mobile) => {
        expect(
          screen.getByRole("img", {
            name: `${mobile.brand} ${mobile.model} mobile`,
          }),
        ).toBeInTheDocument();
      });
    });
  });
});

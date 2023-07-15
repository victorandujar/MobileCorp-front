import { screen } from "@testing-library/react";
import MobileCardList from "./MobileCardList";
import { mobilesMockList } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/testUtils";
import { BrowserRouter } from "react-router-dom";

describe("Given a MobileCardList component", () => {
  describe("When it receives a list of 2 mobiles", () => {
    test("Then it should show each mobile brand and model", () => {
      renderWithProviders(
        <BrowserRouter>
          <MobileCardList mobiles={mobilesMockList} />
        </BrowserRouter>,
      );

      mobilesMockList.forEach((mobile) => {
        expect(
          screen.getByRole("heading", {
            name: `${mobile.brand} ${mobile.model}`,
          }),
        ).toBeInTheDocument();
      });
    });

    test("Then it should show an image", () => {
      renderWithProviders(
        <BrowserRouter>
          <MobileCardList mobiles={mobilesMockList} />
        </BrowserRouter>,
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

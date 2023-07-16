import { BrowserRouter } from "react-router-dom";
import { mobileDetailMock } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/testUtils";
import Actions from "./Actions";
import { screen } from "@testing-library/react";

describe("Given an Actions component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Colors'", () => {
      const headingText = "Colors";

      renderWithProviders(
        <BrowserRouter>
          <Actions
            mobileId={mobileDetailMock.id}
            mobilePrice={mobileDetailMock.price}
            options={mobileDetailMock.options}
          />
        </BrowserRouter>,
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Add to cart'", () => {
      const buttonText = "Add to cart";

      renderWithProviders(
        <BrowserRouter>
          <Actions
            mobileId={mobileDetailMock.id}
            mobilePrice={mobileDetailMock.price}
            options={mobileDetailMock.options}
          />
        </BrowserRouter>,
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});

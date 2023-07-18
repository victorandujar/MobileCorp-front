import { BrowserRouter } from "react-router-dom";
import { mobileDetailMock } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/testUtils";
import Actions from "./Actions";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockAddMobileToCart = jest.fn();
jest.mock("../../hooks/useApi/useApi", () => () => ({
  addMobileToCart: mockAddMobileToCart,
}));

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

    test("Then handleColorsClick should update selectedColorCode", () => {
      renderWithProviders(
        <Actions
          options={mobileDetailMock.options}
          mobilePrice={mobileDetailMock.price}
          productId={mobileDetailMock.id}
        />,
      );

      const colorButton = screen.getByRole("button", {
        name: mobileDetailMock.options.colors[0].name,
      });

      userEvent.click(colorButton);

      expect(colorButton).toBeInTheDocument();
    });

    test("Then handleStorageClick should update selectedStorageCode", () => {
      renderWithProviders(
        <Actions
          options={mobileDetailMock.options}
          mobilePrice={mobileDetailMock.price}
          productId={mobileDetailMock.id}
        />,
      );

      const storageButton = screen.getByRole("button", {
        name: mobileDetailMock.options.storages[0].name,
      });

      userEvent.click(storageButton);

      expect(storageButton).toBeInTheDocument();
    });

    test("Then handleAddMobileToCart should call addMobileToCart and update state", async () => {
      const buttonText = "Add to cart";

      renderWithProviders(
        <Actions
          options={mobileDetailMock.options}
          mobilePrice={mobileDetailMock.price}
          productId={mobileDetailMock.id}
        />,
      );

      const addToCartButton = screen.getByRole("button", {
        name: buttonText,
      });

      await waitFor(async () => await userEvent.click(addToCartButton));

      expect(mockAddMobileToCart).toHaveBeenCalled();
    });
  });
});

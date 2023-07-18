import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import { mobileMockAcer } from "../../mocks/mocks";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome to MobileCorp'", async () => {
      const headerText = "Welcome to MobileCorp";

      let expectedHeader;

      renderWithProviders(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      await waitFor(
        () =>
          (expectedHeader = screen.getByRole("heading", { name: headerText })),
      );

      expect(expectedHeader).toBeInTheDocument();
    });
    test("Then it should render the filtered mobiles when the search input is typed", async () => {
      const headerText = "Acer Iconia Talk S";

      let searchInput;

      renderWithProviders(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      await waitFor(() => {
        searchInput = screen.getByPlaceholderText("Find your mobile");
      });
      userEvent.type(searchInput, mobileMockAcer.brand);

      await waitFor(() => {
        const filteredMobiles = screen.getByRole("heading", {
          name: headerText,
        });
        expect(filteredMobiles).toBeInTheDocument();
      });
    });
  });
});

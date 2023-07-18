import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../utils/testUtils/testUtils";
import DetailPage from "./DetailPage";
import { screen, waitFor } from "@testing-library/react";

describe("Given a DetailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image mobile", async () => {
      let expectedList;

      renderWithProviders(
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>,
      );

      await waitFor(() => (expectedList = screen.getByRole("img")));

      expect(expectedList).toBeInTheDocument();
    });
  });

  test("Then it should show a list of specifications", async () => {
    renderWithProviders(
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>,
    );

    let expectedList;

    await waitFor(() => (expectedList = screen.getByRole("list")));

    expect(expectedList).toBeInTheDocument();
  });
});

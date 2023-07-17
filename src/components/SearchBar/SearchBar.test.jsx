import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/testUtils";
import SearchBar from "./SearchBar";

describe("Given a SarchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it show an input with a placeHolder text 'Find your mobile'", () => {
      const placeHolderText = "Find your mobile";

      renderWithProviders(<SearchBar />);

      const expectedInput = screen.getByPlaceholderText(placeHolderText);

      expect(expectedInput).toBeInTheDocument();
    });
  });
});

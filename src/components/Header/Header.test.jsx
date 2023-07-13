import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'MobileCorp'", () => {
      const headerText = "MobileCorp";

      render(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

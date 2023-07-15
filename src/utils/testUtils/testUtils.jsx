import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import { render } from "@testing-library/react";

const renderWithProviders = (ui) => {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
          <GlobalStyles />
        </QueryClientProvider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;

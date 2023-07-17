import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import MobilesContextProvider from "./store/contexts/MobilesContextProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <MobilesContextProvider>
          <RouterProvider router={router} />
        </MobilesContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

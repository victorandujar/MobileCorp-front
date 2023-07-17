import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import paths from "../utils/paths/paths";
import DetailPage from "../pages/DetailPage/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.detail,
        element: <DetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

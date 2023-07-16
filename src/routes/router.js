import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import paths from "../utils/paths/paths";
import DetailPage from "../pages/DetailPage/DetailPage";

export const routes = [
  {
    path: "/",
    element: <App />,
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

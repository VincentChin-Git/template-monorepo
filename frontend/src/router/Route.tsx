import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Index from "../pages/Index";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;

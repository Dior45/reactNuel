import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
// import Home from "../pages/Home";
import Error400 from "../components/400";
import Error404 from "../components/404";
import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";

const AuthenticatedLayout = lazy(() =>
  import("../components/Layout/authenticated")
);
const UnuthenticatedLayout = lazy(() =>
  import("../components/Layout/unauthenticated")
);
const Home = lazy(() => import("../pages/Home"));
const ProductsPage = lazy(() => import("../pages/Products"));
const Product = lazy(() => import("../pages/Products/Product"));

const MainBody = ({ children }) => {
  return (
    <main className="h-[100vh]  max-w-[100%]">
      {children ? children : <Outlet />}
    </main>
  );
};

const MainRoute = () => {
  const params = useParams();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          index: true,
          element: <AuthenticatedLayout />,
        },
        {
          path: "auth",
          element: <UnuthenticatedLayout />,
          children: [
            {
              index: true,
              element: <h1>sign in page</h1>,
            },
            {
              path: "signup",
              element: <h1>Sign up page</h1>,
            },
            {
              path: "reset-password",

              children: [
                {
                  index: true,
                  element: <h1>reset password page</h1>,
                },
                {
                  path: ":email",
                  element: <h1>hello user with email</h1>,
                },
              ],
            },
            {
              path: "*",
              element: <Error404 />,
            },
          ],
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from "../pages/Home";
import Error400 from "../components/400";
import Error404 from "../components/404";
import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";

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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
          errorElement: <Error400 />,
        },
        {
          path: "product",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductsPage />
                </Suspense>
              ),
              errorElement: <Error400 />,
            },
            {
              path: ":id",
              element: (
                <Suspense fallback={<Loader />}>
                  <Product />
                </Suspense>
              ),
              errorElement: <Error400 />,
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

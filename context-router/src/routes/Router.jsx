import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import useRouter from "./useRouter";
const HomeView = lazy(() => import("../views/HomeView"));
const AboutView = lazy(() => import("../views/AboutView"));
const NewsView = lazy(() => import("../views/NewsView"));
const SportView = lazy(() => import("../views/SportView"));
const EconomyView = lazy(() => import("../views/EconomyView"));
const FinancialView = lazy(() => import("../views/FinancialView"));
const WorldNewsView = lazy(() => import("../views/WorldNewsView"));
const TurkiyeNewsView = lazy(() => import("../views/TurkiyeNewsView"));
const ParameterView = lazy(() => import("../views/ParameterView"));

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    useRouter,
    {
      path: "/news",
      element: <NewsView />,
      children: [
        {
          index: true,
          element: <Navigate to="sport" />,
        },
        {
          path: "sport",
          element: <SportView />,
          children: [
            {
              path: ":id",
              element: <ParameterView />,
            },
          ],
        },
        {
          path: "economy",
          element: <EconomyView />,
          children: [
            {
              index: true,
              element: <Navigate to="financial" />,
            },
            {
              path: "financial",
              element: <FinancialView />,
              children: [
                {
                  index: true,
                  element: <Navigate to="worldnews" />,
                },
                {
                  path: "worldnews",
                  element: <WorldNewsView />,
                },
                {
                  path: "turkiyenews",
                  element: <TurkiyeNewsView />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default Router;

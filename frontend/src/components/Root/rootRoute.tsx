import { App } from "antd";
import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LayoutComponent from "../../views/layout/layoutComponent";
import HomeViews from "../../views/home/home";
import LoginView from "../../views/login/login";
import ErrorView from "../../views/404/404";
import FacultyView from "../../views/faculty/faculty";

const homeRoute: RouteObject[] = [
  {
    path: "/",
    element: <HomeViews />,
  },
  {
    path: "/faculty",
    element: <FacultyView />,
  },
];

const loginRoute: RouteObject[] = [
  {
    path: "/login",
    element: <LoginView />,
  },
];
const primaryroute: RouteObject[] = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: homeRoute,
  },
  {
    path: "/login",
    element: <LoginView />,
    children: loginRoute,
  },
  {
    path: "*",
    element: <ErrorView />,
  },
];

const rootRoute = createBrowserRouter(primaryroute);

const RootRoute = () => {
  return (
    <App>
      <RouterProvider router={rootRoute} />
    </App>
  );
};

export default RootRoute;

import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";

const AppLayout = () => <Outlet/>

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

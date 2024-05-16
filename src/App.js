import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Registration from "./routes/Registration";
import FindDonar from "./routes/FindDonar";

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      {
        path:"/find-donar",
        element: <FindDonar/>
      }
    ],
  },
];

const appRouter = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

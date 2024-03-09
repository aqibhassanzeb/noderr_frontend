import React, { useEffect } from "react";
import "./App.css";
import { Suspense } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { useTheme } from "./themeContext/themeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Support from "./pages/support";
import Stats_page from "./pages/node_page";
import CreatePrmotion from "./pages/CreatePromiton";

const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Stats_page />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "create-promotion",
          element: <CreatePrmotion />,
        },
      ],
    }
  ]
);

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  document.body.setAttribute("data-theme", theme);

  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;

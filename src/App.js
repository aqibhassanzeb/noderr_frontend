import React, { useEffect } from "react";
import "./App.css";
import { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useTheme } from "./themeContext/themeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Support from "./pages/support";
import Stats_page from "./pages/node_page";
import CreatePrmotion from "./pages/CreatePromiton";
import CreateNode from "./pages/createNode";
import CreatePool from "./pages/createPool";
import AllNodes from "./pages/admin/allNodes";

const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));

const router = createBrowserRouter([
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
      {
        path: "create-node",
        element: <CreateNode />,
      },
      {
        path: "create-pool",
        element: <CreatePool />,
      },
      {
        path: "all-nodes",
        element: <AllNodes />,
      },
    ],
  },
]);

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

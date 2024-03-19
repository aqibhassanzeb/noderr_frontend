import React, { useEffect } from "react";
import "./App.css";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useTheme } from "./themeContext/themeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Support from "./pages/support";
import StatsPage from "./pages/node_page";
import CreatePrmotion from "./pages/CreatePromiton";
import CreateNode from "./pages/admin/nodes/createNode";
import CreatePool from "./pages/createPool";
import AllNodes from "./pages/admin/nodes/allNodes";
import AllPromotionCode from "./pages/admin/allPromotion";
import AllVotes from "./pages/admin/allVotes";
import AllPurchaseNodebyUsers from "./pages/admin/allPurchaseNodes";
import "react-loading-skeleton/dist/skeleton.css";
import UpdateUserprofile from "./pages/updateUserProfile";

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
        element: <StatsPage />,
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
      {
        path: "all-promotion-codes",
        element: <AllPromotionCode />,
      },
      {
        path: "all-votes",
        element: <AllVotes />,
      },
      {
        path: "all-purchase-nodes-by-users",
        element: <AllPurchaseNodebyUsers />,
      },
      {
        path: "edit-profile",
        element: <UpdateUserprofile />,
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

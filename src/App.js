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
import UserActiveNode from "./pages/userAcitveNodes";
import Landing from "./pages/landing";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndCondition from "./pages/terms-and-condition";
import ContactPage from "./pages/support/ContactUs";
import FAQSection from "./pages/support/Faq";
import AddFaq from "./pages/admin/addFaq";
import CreateFaq from "./pages/admin/addFaq/create";
import UpdateFaq from "./components/updateFaq";
import Billing from "./pages/billing";
import SwapSection from "./components/ghostyListing/GhostyListing";

const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		path: "privacy-policy",
		element: <PrivacyPolicy />,
	},
	{
		path: "terms-and-conditions",
		element: <TermsAndCondition />,
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
				path: "active-nodes",
				element: <UserActiveNode />,
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
			{
				path: "contact-us",
				element: <ContactPage />,
			},
			{
				path: "faq",
				element: <FAQSection />,
			},
			{
				path: "all-faq",
				element: <AddFaq />,
			},
			{
				path: "create-faq",
				element: <CreateFaq />,
			},
			{
				path: "update-faq",
				element: <UpdateFaq />,
			},
			{
				path: "billing",
				element: <Billing />,
			},
			{
				path: "swap",
				element: <SwapSection />,
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

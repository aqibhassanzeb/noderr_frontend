import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const createApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const handleLoginOrSignUp = async (formData) => {
		try {
			const { data } = await axios.post(
				"/api/user/register-or-login-user",
				formData
			);
			return data;
		} catch (err) {
			return err;
		}
	};

	const signupForBetaLaunch = async (email) => {
		try {
			const { data } = await axios.post(
				"https://beta-email-noderr-production.up.railway.app/api/v1/create-beta-email",
				email
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const handleLogout = async () => {
		try {
			const { data } = await axios.get("/api/user/logout");
			return data;
		} catch (err) {
			return err;
		}
	};

	const getProfileData = async () => {
		try {
			const { data } = await axios.get("/api/user/profile");
			return data;
		} catch (err) {
			return err;
		}
	};
	const updateUserProfile = async (formData) => {
		try {
			const { data } = await axios.put("/api/user/update-profile", formData);
			return data;
		} catch (err) {
			return err;
		}
	};

	const getAllNodes = async () => {
		try {
			const { data } = await axios.get("/api/node/get-all-nodes");
			return data.nodes;
		} catch (err) {
			console.log(err);
		}
	};
	const deleteNode = async (id) => {
		try {
			const { data } = await axios.delete(`/api/node/delete-node/${id}`);
			return data;
		} catch (err) {
			toast.error(err.response.data.message);
		}
	};
	const createNode = async (node) => {
		try {
			const { data } = await axios.post("/api/node/launch-node", node);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const updateNode = async (id, formData) => {
		try {
			const { data } = await axios.patch(
				`/api/node/update-node/${id}`,
				formData
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const generatePromoCode = async (promotion) => {
		try {
			const { data } = await axios.post(
				"/api/promotion/generate-promotion-code",
				promotion
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const getAllPromoCodes = async () => {
		try {
			const { data } = await axios.get("/api/promotion/get-all-promo-codes");
			return data.promoCodes;
		} catch (err) {
			console.log(err);
		}
	};

	const deletePromoCode = async (id) => {
		try {
			const { data } = await axios.delete(
				`/api/promotion/delete-promotion-code/${id}`
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	const updatePromoCode = async (id, updateData) => {
		try {
			const { data } = await axios.patch(
				`/api/promotion/update-promotion-code/${id}`,
				updateData
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const getAllPools = async () => {
		try {
			const { data } = await axios.get("/api/vote/get-polls");
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const createPool = async (pool) => {
		try {
			const { data } = await axios.post("/api/vote/create-poll", pool);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const deletePool = async (id) => {
		try {
			const { data } = await axios.delete(`/api/vote/delete-poll/${id}`);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const updatePool = async (id, updateData) => {
		try {
			const { data } = await axios.patch(
				`/api/vote/update-poll/${id}`,
				updateData
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	const purchaseNode = async (id, purchaseNodeData) => {
		try {
			const { data } = await axios.post(
				`/api/purchase/pruchase-node/${id}`,
				purchaseNodeData
			);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	const getPurchaseNode = async () => {
		try {
			const { data } = await axios.get("/api/purchase/purchase-nodes");
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	const getAllPurchaseNodeByAdmin = async () => {
		try {
			const { data } = await axios.get("/api/purchase/get-purchase-nodes");
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	return (
		<createApiContext.Provider
			value={{
				getAllNodes,
				deleteNode,
				createNode,
				generatePromoCode,
				getAllPromoCodes,
				deletePromoCode,
				getAllPools,
				createPool,
				deletePool,
				updateNode,
				updatePromoCode,
				updatePool,
				handleLoginOrSignUp,
				handleLogout,
				user,
				setUser,
				getProfileData,
				updateUserProfile,
				purchaseNode,
				getPurchaseNode,
				getAllPurchaseNodeByAdmin,
				signupForBetaLaunch,
			}}
		>
			{children}
		</createApiContext.Provider>
	);
};

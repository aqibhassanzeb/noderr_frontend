import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const createApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
    const node = process.env.REACT_APP_NODE_ENDPOINT;
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);

    // Create axios instance with withCredentials: true option
    const axiosWithCredentials = axios.create({
        withCredentials: true
    });

    // Define your API functions using the axiosWithCredentials instance
    const handleLoginOrSignUp = async (formData) => {
        try {
            const { data } = await axiosWithCredentials.post(
                `${node}/user/register-or-login-user`,
                formData
            );
            return data;
        } catch (err) {
            return err;
        }
    };

    const signupForBetaLaunch = async (email) => {
        try {
            const { data } = await axiosWithCredentials.post(
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
            const { data } = await axiosWithCredentials.get(`${node}/user/logout`);
            return data;
        } catch (err) {
            return err;
        }
    };

    const getProfileData = async () => {
        try {
            console.log("cookies checking", document.cookie);
            const { data } = await axiosWithCredentials.get(`${node}/user/profile`);
            return data;
        } catch (err) {
            return err;
        }
    };

    const updateUserProfile = async (formData) => {
        try {
            const { data } = await axiosWithCredentials.put(`${node}/user/update-profile`, formData);
            return data;
        } catch (err) {
            return err;
        }
    };

    const getAllNodes = async () => {
        try {
            console.log("Fetching all nodes...");
            const { data } = await axiosWithCredentials.get(`${node}/node/get-nodes`);

            if (!data.success || !Array.isArray(data.nodes)) {
                throw new Error("Unexpected response structure");
            }

            return data.nodes;
        } catch (err) {
            throw err;
        }
    };

    const deleteNode = async (id) => {
        try {
            const { data } = await axiosWithCredentials.delete(`${node}/node/delete-node/${id}`);
            return data;
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const createNode = async (formData) => {
        try {
            const { data } = await axiosWithCredentials.post(`${node}/node/launch-node`, formData);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const updateNode = async (id, formData) => {
        try {
            const { data } = await axiosWithCredentials.patch(
                `${node}/node/update-node/${id}`,
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
            const { data } = await axiosWithCredentials.post(
                `${node}/promotion/generate-promotion-code`,
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
            const { data } = await axiosWithCredentials.get(`${node}/promotion/get-all-promo-codes`);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const deletePromoCode = async (id) => {
        try {
            const { data } = await axiosWithCredentials.delete(
                `${node}/promotion/delete-promotion-code/${id}`
            );
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const updatePromoCode = async (id, updateData) => {
        try {
            const { data } = await axiosWithCredentials.patch(
                `${node}/promotion/update-promotion-code/${id}`,
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
            const { data } = await axiosWithCredentials.get(`${node}/vote/get-polls`);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const createPool = async (pool) => {
        try {
            const { data } = await axiosWithCredentials.post(`${node}/vote/create-poll`, pool);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const deletePool = async (id) => {
        try {
            const { data } = await axiosWithCredentials.delete(`${node}/vote/delete-poll/${id}`);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const updatePool = async (id, updateData) => {
        try {
            const { data } = await axiosWithCredentials.patch(
                `${node}/vote/update-poll/${id}`,
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
            const { data } = await axiosWithCredentials.post(
                `${node}/purchase/pruchase-node/${id}`,
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
            const { data } = await axiosWithCredentials.get(`${node}/purchase/purchase-nodes`);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    const getAllPurchaseNodeByAdmin = async () => {
        try {
            const { data } = await axiosWithCredentials.get(`${node}/purchase/purchase-nodes`);
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };
	const getAllFaq = async () => {
		try {
			const { data } = await axiosWithCredentials.get(`${node}/faq/get-faq`);
			return data;
		} catch (err) {
			console.log(err);
			return err
		}
	};
	const createFaqByAdmin = async (faqData) => {
		try {
			const { data } = await axiosWithCredentials.post(`${node}/faq/create-faq`, faqData);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	
	const deleteFaq = async (id) => {
		try {
			const { data } = await axiosWithCredentials.delete(`${node}/faq/delete-faq/${id}`);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	
	const updateFaqByAdmin = async (id, formData) => {
		try {
			const { data } = await axiosWithCredentials.patch(
				`${node}/faq/update-faq/${id}`,
				formData
			);
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
				userData,
				setUserData,
				getProfileData,
				updateUserProfile,
				purchaseNode,
				getPurchaseNode,
				getAllPurchaseNodeByAdmin,
				signupForBetaLaunch,
				getAllFaq,
				createFaqByAdmin,
				deleteFaq,
				updateFaqByAdmin
            }}
        >
            {children}
        </createApiContext.Provider>
    );
};


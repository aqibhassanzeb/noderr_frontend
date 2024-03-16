import axios from "axios";
import { createContext } from "react";
import { toast } from "react-toastify";

export const createApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
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
        deletePool
      }}
    >
      {children}
    </createApiContext.Provider>
  );
};

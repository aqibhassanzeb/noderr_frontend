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
        toast.error(err.response.data.message)
    }
  };
  return (
    <createApiContext.Provider
      value={{
        getAllNodes,
        deleteNode,
      }}
    >
      {children}
    </createApiContext.Provider>
  );
};

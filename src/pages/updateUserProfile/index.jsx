import React from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { createApiContext } from "../../context/apiContext";
import InputContainer from "../../components/dashboard/InputContainer";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
const UpdateUserprofile = () => {
  const { getProfileData, updateUserProfile } =
    React.useContext(createApiContext);
  const [walletAddress, setWalletAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getUser = async () => {
      const data = await getProfileData();
      if (data.user.name === null || data.user.email === null) {
        toast.info("Please complete your profile");
      }

      if (data.success) {
        setWalletAddress(data.user.walletAddress);
        setName(data.user.name);
        setEmail(data.user.email);
      }
    };
    getUser();
  }, []);
  const updateHandler = async (formData) => {
    setLoading(true);
    const data = await updateUserProfile(formData);
    if (data.success) {
      toast.success("Profile updated successfully");
      setLoading(false);
      navigate("/dashboard");
    } else if (data.response.data.message) {
      toast.error(data.response.data.message);
      setLoading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    updateHandler(formData);
  };
  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Edit Profile"} badge={"GM, Stranger"} />
          <form className="update_profile_form" onSubmit={submitHandler}>
            <InputContainer
              label={"wallet address"}
              id={"vote_title"}
              type={"text"}
              name={"address"}
              value={walletAddress}
              disable={walletAddress ? true : false}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <InputContainer
              label={"Name"}
              id={"name"}
              type={"text"}
              name={"name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputContainer
              label={"email"}
              id={"email"}
              type={"text"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn primary"
              style={{ width: "100%" }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserprofile;

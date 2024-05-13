import React, { useEffect } from "react";
import "./index.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { images } from "../../images";
import { NavLink, Outlet } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { AiOutlineLogout } from "react-icons/ai";
import Footer from "../../components/footer";
import { useDisconnect } from "wagmi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import LogoutConfirmationModal from "../logoutModal";

const Dashboard = () => {
  const { disconnect } = useDisconnect();
  const {
    handleLoginOrSignUp,
    handleLogout,
    getProfileData,
    user,
    setUser,
    userData,
    setUserData,
    address,
  } = React.useContext(createApiContext);
  console.log("🚀 ~ Dashboard ~ user:", user, userData)
  const [show, setShow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  useEffect(() => {
    const getUser = async () => {
      // console.log("get profile api call @@")
      const data = await getProfileData();
      setUserData(data?.user);
      if (data.success) setUser(data.success);
    };
    getUser();
  }, [user]);

  const handleAuth = async () => {
    setLoading(true);
    const authData = {
      userWallet: address,
      // userWallet: "0xD775c914a90eA18B50C5f04e4a45Ba3c91F171a8",
    };
    const data = await handleLoginOrSignUp(authData);
    console.log("data :", data);
    if (data.success) {
      setLoading(false);
      toast.success(data?.message?.toLowerCase());
      // sessionStorage.setItem('token',data.)
      document.cookie = `token=${data.token}; path=/;`;
      setUser(data.success);
    } else if (data.response.data.message) {
      setLoading(false);
      toast.error(data.response.data.message);
    }
  };

  useEffect(() => {
    if (address !== null && address !== "" && address !== undefined) {
      authUser();
    }
  }, [address]);

  const authUser = () => {
    handleAuth();
  };
  // const logoutHandler = async () => {
  //   setLoading(true);
  //   const data = await handleLogout();
  //   if (data.success) {
  //     console.log(data);
  //     setLoading(false);
  //     setUser(null);
  //     setUserData(null);
  //     toast.success(data.message.toLowerCase());
  //     disconnect();
  //     // window.location.reload();
  //   } else if (data.response.data.message) {
  //     setLoading(false);
  //     toast.error(data.response.data.message);
  //   }
  // };
  const logoutHandler = () => {
    setShowLogoutModal(true); // Open logout confirmation modal
  };
  const confirmLogout = async () => {
    setLoading(true);
    const data = await handleLogout();
    if (data.success) {
      setLoading(false);
      setUser(null);
      setUserData(null);
      toast.success(data.message.toLowerCase());
      disconnect();
    } else if (data.response.data.message) {
      setLoading(false);
      toast.error(data.response.data.message);
    }
    setShowLogoutModal(false); // Close logout confirmation modal
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="dashboard_container">
        <div className="header">
          <div className="icon" onClick={() => setShow(!show)}>
            <RxHamburgerMenu />
          </div>
          {user && (
            <div className="header_logout" onClick={logoutHandler}>
              <span className="icon">
                <AiOutlineLogout />
              </span>
              <span className="text">logout</span>
            </div>
          )}
          {/* {!user && <w3m-button size="md" label="Connect Wallet" />} */}
        </div>
        <div className="dashboard">
          <div
            className={
              show
                ? "side_menu hide overflow-scroll"
                : "side_menu overflow-scroll"
            }
          >
            <div className="menu_container">
              <div className="brand_log">
                <img src={images.TextLogo} alt="logo" />
              </div>
              <div className="nav_container">
                <div className="menu_list">
                  <NavLink
                    className="menu_item"
                    to={""}
                    end
                    onClick={() => setShow(!show)}
                  >
                    <img src={images.LogoGif} alt="dashboard" />
                    <span>Hub</span>
                  </NavLink>
                  <NavLink
                    className="menu_item"
                    to={"active-nodes"}
                    end
                    onClick={() => setShow(!show)}
                  >
                    <img src={images.activeNode} alt="dashboard" />
                    <span>active nodes</span>
                  </NavLink>
                  {userData?.role === "admin" && (
                    <>
                      <NavLink
                        className="menu_item"
                        to={"all-nodes"}
                        onClick={() => setShow(!show)}
                      >
                        <img src={images.shareNode} alt="support" />
                        <span>all nodes</span>
                      </NavLink>
                      <NavLink
                        className="menu_item"
                        to={"all-purchase-nodes-by-users"}
                        onClick={() => setShow(!show)}
                      >
                        <img src={images.purchase} alt="support" />
                        <span>Purchase Node Slot</span>
                      </NavLink>
                      <NavLink
                        className="menu_item"
                        to={"all-promotion-codes"}
                        onClick={() => setShow(!show)}
                      >
                        <img src={images.promotion} alt="support" />
                        <span>all promotion codes</span>
                      </NavLink>
                      <NavLink
                        className="menu_item"
                        to={"all-votes"}
                        onClick={() => setShow(!show)}
                      >
                        <img src={images.vote} alt="support" />
                        <span>all votes</span>
                      </NavLink>
                    </>
                  )}
                  <NavLink
                    className="menu_item"
                    to={"swap"}
                    onClick={() => setShow(!show)}
                  >
                    <LiaExchangeAltSolid ></LiaExchangeAltSolid>
                    {/* <img src={images.support} alt="swaps" /> */}
                    <span>Swap</span>
                  </NavLink>
                  <NavLink
                    className="menu_item"
                    to={"support"}
                    onClick={() => setShow(!show)}
                  >
                    <img src={images.support} alt="support" />
                    <span>support</span>
                  </NavLink>
                  <NavLink
                    className="menu_item"
                    to={"billing"}
                    onClick={() => setShow(!show)}
                  >
                    <img src={images.billing} alt="support" />
                    <span>Billing</span>
                  </NavLink>
                </div>
                {/* {user ? (
                  <button onClick={logoutHandler}>Logout</button>
                ) : (
                  <button onClick={authUser}>Login</button>
                )} */}

                {user && (
                  <div className="logout_btn" onClick={logoutHandler}>
                    <span className="icon">
                      <AiOutlineLogout />
                    </span>
                    <span className="text">logout</span>
                  </div>
                )}
                {/* <div style={{ marginBottom: 80, marginLeft: 30 }}>
                  {!user && <w3m-button size="md" label="Connect Wallet" />}
                </div> */}
              </div>
              <div className="close_btn" onClick={() => setShow(!show)}>
                <IoCloseCircleOutline />
              </div>
            </div>
          </div>

          <Outlet />
        </div>
        <Footer />

        <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;

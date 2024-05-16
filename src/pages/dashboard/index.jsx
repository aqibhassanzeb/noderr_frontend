import React, { Suspense, useEffect } from "react";
import "./index.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { images } from "../../images";
import { NavLink, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { AiOutlineLogout } from "react-icons/ai";
// import Footer from "../../components/footer";
import { useDisconnect } from "wagmi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import LogoutConfirmationModal from "../logoutModal";

const Footer = React.lazy(() => import('../../components/footer/index'))
const Dashboard = React.memo(() => {
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
  const [show, setShow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  useEffect(() => {
    const getUser = async () => {
      const data = await getProfileData();
      setUserData(data?.user);
      if (data.success) setUser(data.success);
    };
    getUser();
  }, [user]);

  // handle auth user
  const handleAuth = async () => {
    setLoading(true);
    const authData = {
      userWallet: address,
    };

    // handle login or sign up
    const data = await handleLoginOrSignUp(authData);
    if (data.success) {
      setLoading(false);
      toast.success(data?.message?.toLowerCase());
      document.cookie = `token=${data.token}; path=/;`;
      setUser(data.success);
    } else if (data.response.data.message) {
      setLoading(false);
      toast.error(data.response.data.message);
    }
  };

  //check if address not null or undefined then set the address
  useEffect(() => {
    if (address !== null && address !== "" && address !== undefined) {
      authUser();
    }
  }, [address]);

  // auth user
  const authUser = () => {
    handleAuth();
  };
 // logout handler for confirm logout modal
  const logoutHandler = () => {
    setShowLogoutModal(true); 
  };

  // confirmLogout for logout
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
    setShowLogoutModal(false); 
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
                    <LiaExchangeAltSolid></LiaExchangeAltSolid>
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

                {user && (
                  <div className="logout_btn" onClick={logoutHandler}>
                    <span className="icon">
                      <AiOutlineLogout />
                    </span>
                    <span className="text">logout</span>
                  </div>
                )}
              </div>
              <div className="close_btn" onClick={() => setShow(!show)}>
                <IoCloseCircleOutline />
              </div>
            </div>
          </div>

          <Outlet />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />

        </Suspense>

        <LogoutConfirmationModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={confirmLogout}
        />
      </div>
    </>
  );
});

export default Dashboard;

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
import { useDisconnect } from "wagmi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import LogoutConfirmationModal from "../logoutModal";
import { CgProfile } from "react-icons/cg";
import { useAccount } from 'wagmi'
const Footer = React.lazy(() => import('../../components/footer/index'))
const Dashboard = React.memo(() => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const {
    handleLoginOrSignUp,
    handleLogout,
    getProfileData,
    user,
    setUser,
    userData,
    setUserData
  } = React.useContext(createApiContext);
  const [show, setShow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setLoading(true);
        try {
          const data = await getProfileData();
          setUserData(data?.user);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  const handleAuth = async () => {
    setLoading(true);
    try {
      const authData = { userWallet: address };
      const data = await handleLoginOrSignUp(authData);
      if (data.success) {
        toast.success(data?.message?.toLowerCase());
        document.cookie = `token=${data.token}; path=/;`;
        setUser(data.success);
      } else if (data.response?.data?.message) {
        toast.error(data.response.data.message);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) {
      handleAuth();
    }
  }, [address]);

  const logoutHandler = () => {
    setShowLogoutModal(true);
  };
  const confirmLogout = async () => {
    setLoading(true);
    try {
      const data = await handleLogout();
      if (data.success) {
        setUser(null);
        setUserData(null);
        toast.success(data.message.toLowerCase());
        disconnect();
      } else if (data.response?.data?.message) {
        toast.error(data.response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    } finally {
      setLoading(false);
      setShowLogoutModal(false);
    }
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
                    <span>Invoice</span>
                  </NavLink>

                  <NavLink
                    className="menu_item"
                    to={"edit-profile"}
                    onClick={() => setShow(!show)}
                  >
                    {/* <img src={images.LogoGif} alt="support" /> */}
                    
                  <CgProfile className="w-[14px] h-4 lg:w-5 lg:h-6" />
                    <span>Profile</span>
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


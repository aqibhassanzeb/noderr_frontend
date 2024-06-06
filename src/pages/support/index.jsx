import React, { useContext } from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { images } from "../../images";
import { createApiContext } from "../../context/apiContext";

const SupportSection = () => {
  const {userData } = useContext(createApiContext);

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"Support"}
          // badge={"GM, Noderr"}
          badge={userData ? `GM, ${userData.firstName} ${userData.lastName}` : "GM, Noderr"}

          // profilePic={images.FakePic}
          profilePic={userData?.profilePic? `${process.env.REACT_APP_NODE_IMG_URL}${userData.profilePic}` : images.FakePic}

        />
        <div className="text-center">
          <h2 className="text-3xl font-bold  mb-4">Need Help?</h2>
          <p className="text-lg  mb-8">We're here to assist you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.27)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(16.3px)',
            WebkitBackdropFilter: 'blur(16.3px)',
            border: '1px solid rgba(255, 255, 255, 1)',
          }}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h3>
            <p className="text-gray-600 mb-4" style={{color: 'white'}} >
              Find answers to common questions.
            </p>
            <Link
              to="/dashboard/faq"
              className="text-blue-600 hover:text-blue-800" style={{color: '#00b0c9'}}
            >
              Read FAQs &rarr;
            </Link>
          </div>
          <div style={{
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.27)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(16.3px)',
            WebkitBackdropFilter: 'blur(16.3px)',
            border: '1px solid rgba(255, 255, 255, 1)',
          }}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4" style={{color: 'white'}}>
              Get in touch with our support team.
            </p>
            <Link
              to="/dashboard/contact-us"
              className="text-blue-600 hover:text-blue-800" style={{color: '#00b0c9'}}
            >
              Contact Support &rarr;
            </Link>
          </div>
        </div>
        <div
          className="
        flex justify-center items-center flex-col mt-8
        "
        style={{
          
        }}
        >
          <p className="text-lg  mb-8">
            If you need assistance, feel free to join our Discord server:
          </p>
          <a
            href="https://discord.com/invite/NPdJeDcB"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button flex items-center justify-center bg-[#5865f2] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
  // style={{background: 'linear-gradient(90deg, #fda925 0%, rgba(0, 0, 0, 0) 1000%)'}} 
          >
            <i className="fab fa-discord mr-2"></i>
            Join our Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;

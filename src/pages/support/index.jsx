import React from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { images } from "../../images";

const SupportSection = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"Support"}
          badge={"GM, Noderr"}
          profilePic={images.FakePic}
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold  mb-4">Need Help?</h2>
          <p className="text-lg  mb-8">We're here to assist you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h3>
            <p className="text-gray-600 mb-4">
              Find answers to common questions.
            </p>
            <Link
              to="/dashboard/faq"
              className="text-blue-600 hover:text-blue-800"
            >
              Read FAQs &rarr;
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              Get in touch with our support team.
            </p>
            <Link
              to="/dashboard/contact-us"
              className="text-blue-600 hover:text-blue-800"
            >
              Contact Support &rarr;
            </Link>
          </div>
        </div>
        <div
          className="
        flex justify-center items-center flex-col mt-8
        "
        >
          <p className="text-lg  mb-8">
            If you need assistance, feel free to join our Discord server:
          </p>
          <a
            href="https://discord.com/channels/1227850744003035246/1231274981158031430"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button flex items-center justify-center bg-[#5865f2] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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

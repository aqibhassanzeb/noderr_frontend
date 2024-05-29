import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../images";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import { IoArrowBackCircle } from "react-icons/io5";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllFaq } = useContext(createApiContext);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // useEffect(() => {
  //   const fetchFaq = async () => {
  //     try {
  //       const response = await getAllFaq();
  //       setFaqData(response?.data?.faq);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("Error fetching nodes", error);
  //       toast.error(error.response.data.message);
  //     }
  //   };
  //   fetchFaq();
  // }, []);
  const faqData1 = [
    {
      question: "What is Noderr",
      answer: `Noderr is a platform designed to simplify the process of creating and managing nodes. Our automated system ensures minimal user intervention while maintaining maximum uptime for your nodes
      `,
    },

    {
      question: "How do I create a node",
      answer: `
      To create a node on Noderr, follow these simple steps:
1. Click on 'Launch Node' to access the platform
2. Connect your wallet securely
3. Choose and pay for your desired node slot
4. Enter required information
5. Once confirmed, check your active nodes to ensure everything is set up correctly

      `,
    },

    {
      question: "What payment methods do you accept",
      answer: `We currently accept payments exclusively in cryptocurrency. Upon selecting your desired node slot, you'll be prompted to complete your payment using supported cryptocurrencies

      In the future fiat currency will be accepted
      `,
    },

    {
      question: "How secure is Noderr",
      answer: `Noder prioritizes the security of your nodes and personal information. We implement robust security measures, including the highest standard of encryption protocols and wallet integration, to ensure the safety of your assets and data. Noderr conducts thorough internal security audits in addition to engaging reputable third-party auditing teams. This dual approach ensures comprehensive scrutiny of our platform's security measures, providing our users with enhanced confidence in the safety and integrity of their assets`,
    },

    {
      question: "How can I contact support if I encounter any issues",
      answer: `If you encounter any issues or have questions, our dedicated support team is here to assist you. You can reach out to us through our contact form on the Noderr dashboard, or by joining discord and submitting an official ticket. We strive to provide prompt and helpful assistance to all our users. Spamming in discord general chats will result in permanent ban and removal from Noderr applications`,
    },
    {
      question: "Does Noderr offer refunds?",
      answer: `At this time, we do NOT offer refunds for node slots purchased on Noderr. We recommend carefully considering your node selections before making a purchase
      `,
    },
    {
      question:
        "Is Noderr responsible for the failure of third-party applications AKA Nodes",
      answer: `No, Noderr operates independently from the third-party blockchain companies. While we provide the infrastructure and maintenance for these nodes, we do not have any direct connection or responsibility for the performance or actions of these external applications. When you purchase a node slot through Noderr, you are solely engaging with our platform and services.
      `,
    },
  ];
  useEffect(() => {
    setFaqData(faqData1);
  }, []);
  const navigate = useNavigate();
  const handleCloseCreate = () => {
    navigate("/dashboard/support");
  };
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <div className="mb-2 py-3">
          <span className="close" onClick={handleCloseCreate}>
            <IoArrowBackCircle className="text-white w-8 h-8" />
          </span>
        </div>
        <PageHeader
          page_title={"Support"}
          badge={"GM, Noderr"}
          profilePic={images.FakePic}
        />
        <section>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-white">
                Explore Common Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              {faqData?.map((item, index) => (
                <div
                  key={index}
                  className="transition-all duration-200 bg-transparent border border-gray-200 shadow-lg cursor-pointer hover:bg-[#424543]"
                >
                  <button
                    type="button"
                    onClick={() => toggleAnswer(index)}
                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  >
                    <span className="flex text-lg font-semibold text-white">
                      {item?.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 text-gray-400 transform ${openIndexes.includes(index) ? "rotate-0" : "rotate-180"
                        }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    style={{
                      display: openIndexes.includes(index) ? "block" : "none",
                    }}
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >
                    <p className="mt-3 text-base font-normal leading-relaxed text-white sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
                      {item?.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-center text-white mt-9">
              Still have questions?{" "}
              <Link
                to="/dashboard/contact-us"
                className="font-medium transition-all duration-200 cursor-pointer text-tertiary hover:text-tertiary focus:text-tertiary hover-underline"
              >
                Contact our support
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQSection;

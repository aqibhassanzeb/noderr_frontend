import React, { useState } from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { images } from "../../images";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqData = [
    {
      question: "What is Noderr?",
      answer: `Noderr is a platform that allows you to create and manage your own nodes.`,
    },

    {
      question: "How do I create a node?",
      answer: `To create a node, click on the create node button on the dashboard.`,
    },

    {
      question: "How do I create a pool?",
      answer: `To create a pool, click on the create pool button on the dashboard.`,
    },

    {
      question: "How do I create a promotion?",
      answer: `To create a promotion, click on the create promotion button on the dashboard.`,
    },

    {
      question: "How do I view all nodes?",
      answer: `To view all nodes, click on the all nodes button on the dashboard.`,
    },
  ];

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Support"} badge={"GM, Noderr"}
          profilePic={images.FakePic} />
        <section>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                Explore Common Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              {faqData.map((item, index) => (
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
                    <p
                      className="
                      text-white
                      text-base
                      leading-relaxed
                      sm:text-lg
                      lg:text-xl
                      xl:text-lg
                      2xl:text-xl
                      font-normal
                      mt-3
                    "
                    >
                      {item?.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-white text-base mt-9">
              Still have questions?{" "}
              <Link
                to="/dashboard/contact-us"
                className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline"
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

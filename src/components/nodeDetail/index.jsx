import React, { useEffect, useState } from "react";
import "./index.css";
import { images } from "../../images";
import { GrFormClose } from "react-icons/gr";
const NodeDetail = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [computeTotal, setComputeTotal] = useState(0);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const nodeFee = 29.99;

    // Calculate the total based on the selected tab and node fee
    const total = nodeFee * activeTab;
    setComputeTotal(total);
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [activeTab]);
  const getMonthDuration = () => {
    switch (activeTab) {
      case 1:
        return "1 month";
      case 3:
        return "3 months";
      case 6:
        return "6 months";
      case 12:
        return "12 months";
      default:
        return "1 month";
    }
  };
  return (
    <div className="node_detail_section">
      <div className="node_detail_container">
        <div className="detail_header">
          <div className="left">
            <div className="img_container" style={{ background: "#ffffff" }}>
              <img src={images.bevm} alt="brand" />
            </div>
            <h3 className="title">node title</h3>
          </div>
          <div className="right">
            <span className="close">
              <GrFormClose />
            </span>
          </div>
        </div>
        <div className="detail_body">
          <h4>duration (in months)</h4>
          <div className="tabs">
            <span
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              1
            </span>
            <span
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              3
            </span>
            <span
              className={`tab ${activeTab === 6 ? "active" : ""}`}
              onClick={() => handleTabClick(6)}
            >
              6
            </span>
            <span
              className={`tab ${activeTab === 12 ? "active" : ""}`}
              onClick={() => handleTabClick(12)}
            >
              12
            </span>
          </div>
          <div className="fee_structure">
            <span className="label">node fee</span>
            <span className="pricing">$29.99/month</span>
          </div>
          <div className="fee_structure">
            <span className="label">period</span>
            <span className="pricing">{getMonthDuration()}</span>
          </div>
          <div className="fee_structure border-top">
            <span className="label">total</span>
            <span className="pricing">${computeTotal}</span>
          </div>
        </div>
        <div className="detail_footer">
          <p>
            <span>Click here</span> to view installation steps
          </p>
          <button className="detail_btn">purchase</button>
        </div>
      </div>
    </div>
  );
};

export default NodeDetail;

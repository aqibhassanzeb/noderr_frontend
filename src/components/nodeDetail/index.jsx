import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { GrFormClose } from "react-icons/gr";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../ApiLoader";
import PaymentModal from "../paymentModal/PaymentModal";

const NodeDetail = ({ node, onClose }) => {
  const { purchaseNode, createPayNowPayment, getPaymentStatus } = useContext(createApiContext);
  const [activeTab, setActiveTab] = useState(3);
  const [computeTotal, setComputeTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [status, setStatus] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Calculate the total based on the selected tab and node fee
    const nodeFee = node.nodePrice;
    const total = nodeFee * activeTab;
    setComputeTotal(total);

    // Set duration based on the selected tab
    switch (activeTab) {
      case 1:
        setDuration(1);
        break;
      case 3:
        setDuration(3);
        break;
      case 6:
        setDuration(6);
        break;
      case 12:
        setDuration(12);
        break;
      case 24:
        setDuration(24);
        break;
      default:
        setDuration(1);
        break;
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [activeTab, node.nodePrice]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const purchaseHandler = async () => {
    setLoading(true);
    const data = [
      {
        durationMonths: duration,
        price: computeTotal
      }
    ]
    try {
      const paymentResponse = await createPayNowPayment(computeTotal, node?._id, duration);
      setPaymentUrl(paymentResponse.invoice_url);
      setPaymentId(paymentResponse.id);
      setOpenModal(true);
      setLoading(false);
      // return console.log("🚀 ~ purchaseHandler ~ paymentResponse:", paymentResponse);
      // const response = await purchaseNode(node._id, data);
      // console.log(response);
      // if (response.success) {
      //   setLoading(false);
      //   toast.success("Node purchased successfully");
      //   onClose();
      // } else if (response.response.data.message) {
      //   setLoading(false);
      //   toast.error(response.response.data.message);
      // }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to purchase node. Please try again later.");
    }
  };


  const checkPaymentStatus = async () => {
    try {
      const paymentStatus = await getPaymentStatus(paymentId);
      setStatus(paymentStatus.payment_status);
    } catch (error) {
      console.error('Fetching payment status failed', error);
    }
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="node_detail_section">
        <div className="node_detail_container">
          <div className="detail_header">
            <div className="left">
              <div
                className="img_container"
                style={{ background: node.bgColor }}
              >
                <img src={`${process.env.REACT_APP_NODE_IMG_URL}${node.nodeImage?.url}`} alt="brand" />
              </div>
              <h3 className="title">{node.nodeName}</h3>
            </div>
            <div className="right">
              <span className="close" onClick={onClose}>
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
              <span
                className={`tab ${activeTab === 24 ? "active" : ""}`}
                onClick={() => handleTabClick(24)}
              >
                24
              </span>
            </div>
            <div className="fee_structure">
              <span className="label">node fee</span>
              <span className="pricing">${node.nodePrice}/month</span>
            </div>
            <div className="fee_structure">
              <span className="label">period</span>
              <span className="pricing">{duration} month(s)</span>
            </div>
            <div className="fee_structure border-top">
              <span className="label">total</span>
              <span className="pricing">${computeTotal}</span>
            </div>
          </div>
          <div className="detail_footer">
            {/* <p>
              <span>Click here</span> to view installation steps
            </p> */}
            <button
              className="detail_btn"
              onClick={purchaseHandler}
              disabled={loading}
            >
              {loading ? "Purchasing..." : "Purchase"}
            </button>
          </div>
        </div>
      </div>
      <PaymentModal openModal={openModal} setOpenModal={setOpenModal} paymentUrl={paymentUrl} paymentId={paymentId} onClose={onClose} />
    </>
  );
};

export default NodeDetail;

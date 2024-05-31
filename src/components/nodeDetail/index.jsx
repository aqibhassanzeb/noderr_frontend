import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { GrFormClose } from "react-icons/gr";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../ApiLoader";
import PaymentModal from "../paymentModal/PaymentModal";
import InputContainer from "../dashboard/InputContainer";

const NodeDetail = ({ node, onClose }) => {
  const {
    purchaseNode,
    createPayNowPayment,
    getPaymentStatus,
    purchaseNodeWithPromoCode,
    availPromoCode,
  } = useContext(createApiContext);
  const [activeTab, setActiveTab] = useState(3);
  const [computeTotal, setComputeTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(3);
  const [paymentUrl, setPaymentUrl] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [status, setStatus] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [rpcUrl, setRpcUrl] = useState("");
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Calculate the total based on the selected tab and node fee
    const nodePrice = node.nodePrice[`price${activeTab}`];
    const total = nodePrice * activeTab;
    setComputeTotal(total);

    // Set duration based on the selected tab
    setDuration(activeTab);

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
        price: computeTotal,
      },
    ];
    try {
      const paymentResponse = await purchaseNode(
        computeTotal,
        node?._id,
        duration,
        privateKey,
        rpcUrl,
        node?.nodeName
      );
      console.log("🚀 ~ purchaseHandler ~ paymentResponse", paymentResponse)
      if (paymentResponse?.message) {
        toast.success(paymentResponse.message);
        setLoading(false);
        onClose();

      }
      // const paymentResponse = await createPayNowPayment(
      //   computeTotal,
      //   node?._id,
      //   duration,
      //   privateKey,
      //   rpcUrl,
      //   node?.nodeName
      // );
      // setPaymentUrl(paymentResponse.invoice_url);
      // setPaymentId(paymentResponse.id);
      // setOpenModal(true);
      // setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to purchase node. Please try again later.");
    }
  };


  const purchaseWithPromoCode = async () => {
    setLoading(true);
    const data = [
      {
        durationMonths: duration,
        price: computeTotal,
      },
    ];
    try {
      // const availCode = await availPromoCode({ code: promoCode });
      // if (availCode?.success) {
      const res = await purchaseNodeWithPromoCode(node?._id, promoCode, computeTotal, node?.nodeName, privateKey, rpcUrl, duration);
      if (res?.success) {
        toast.success(res.message);
        onClose();
        setLoading(false);
      } else {
        toast.error(res.message);
        setLoading(false);
        onClose();

      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to purchase node. Please try again later.");
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
                <img
                  src={`${process.env.REACT_APP_NODE_IMG_URL}${node.nodeImage?.url}`}
                  alt="brand"
                />
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
              {[1, 3, 6, 12, 24].map((num) => (
                <span
                  key={num}
                  className={`tab ${activeTab === num ? "active" : ""}`}
                  onClick={() => handleTabClick(num)}
                >
                  {num}
                </span>
              ))}
            </div>
            <div className="fee_structure">
              <span className="label">node fee</span>
              <span className="pricing">
                ${node.nodePrice[`price${activeTab}`]}/month
              </span>
            </div>
            <div className="fee_structure">
              <span className="label">period</span>
              <span className="pricing">{duration} month(s)</span>
            </div>
            <div className="fee_structure border-top">
              <span className="label">total</span>
              <span className="pricing">${computeTotal}</span>
            </div>
            <div>
              <InputContainer
                type="text"
                id="privateKey"
                label="Private Key"
                placeholder="Enter private key"
                textColor="text-black"
                name="privateKey"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </div>
            <div>
              <InputContainer
                type={"url"}
                id={"rpcUrl"}
                label={"RPC URL"}
                placeholder="Enter RPC URL"
                textColor={"text-black"}
                name={"rpcUrl"}
                value={rpcUrl}
                onChange={(e) => setRpcUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="detail_footer">
            {!promoCode && (
              <button
                className="detail_btn"
                onClick={purchaseHandler}
                disabled={loading || !privateKey || !rpcUrl}
              >
                {loading ? "Purchasing..." : "Purchase"}
              </button>
            )}
          </div>
          {/* input section */}
          <div className="promo_code_section">
            <InputContainer
              type="text"
              id={"promoCode"}
              label={"Enter promo code"}
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              textColor={"text-black"}
              name={"promoCode"}
            />
            {promoCode && (
              <button
                onClick={purchaseWithPromoCode}
                className="text-lg text-white bg-primary px-4 py-2 rounded-md
              bg-yellow-500 hover:bg-yellow-600 text-center mt-4
              flex justify-center m-auto w-full p-4"
              >
                Apply
              </button>
            )}
          </div>
        </div>
      </div>
      <PaymentModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        paymentUrl={paymentUrl}
        paymentId={paymentId}
        onClose={onClose}
      />
    </>
  );
};

export default NodeDetail;

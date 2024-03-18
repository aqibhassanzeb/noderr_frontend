import React from "react";
import "./index.css";
import { FaRegCopy } from "react-icons/fa6";
import CURDBtn from "../../CURDBtn";

const PromotionCode = ({
  code,
  discount,
  maxUsage,
  currentUsage,
  expiryDate,
  onDelete,
  onEdit,
}) => {
  const expiry_date = new Date(expiryDate).toLocaleDateString();
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div className="promotion_code">
      <span className="ribbon"></span>

      <p className="discount">flat {discount}% discount</p>
      <div className="promo_code">
        <span className="code">{code}</span>
        <span className="copy_btn" onClick={copyCodeToClipboard}>
          <FaRegCopy />
        </span>
      </div>
      <div className="promo_usage">
        <p>current Usage: {currentUsage}</p>
        <p>Max Usage: {maxUsage}</p>
      </div>
      <div className="expiry_date">
        <p>validate upto: {expiry_date}</p>
      </div>
      <div className="curd_btns">
        <CURDBtn onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default PromotionCode;

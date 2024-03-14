import React from "react";
import "./index.css";
import { FaRegCopy } from "react-icons/fa6";
import CURDBtn from "../../CURDBtn";
const PromotionCode = () => {
  return (
    <div className="promotion_code">
      <span className="ribbon"></span>

      <p className="discount">flat 20% discount</p>
      <div className="promo_code">
        <span className="code">Edqas3o3</span>
        <span className="copy_btn">
          <FaRegCopy />
        </span>
      </div>
      <div className="promo_usage">
        <p>current Usage: 20</p>
        <p>Max Usage: 100</p>
      </div>
      <div className="expiry_date">
        <p>validate upto: 20/12/2022</p>
      </div>
      <div className="curd_btns">
        <CURDBtn />
      </div>
    </div>
  );
};

export default PromotionCode;

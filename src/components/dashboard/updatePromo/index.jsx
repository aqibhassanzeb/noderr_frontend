import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import InputContainer from "../InputContainer";
import { GrFormClose } from "react-icons/gr";
import voucher_codes from "voucher-code-generator";
import { createApiContext } from "../../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../ApiLoader";

const UpdatePromo = ({ promoData, onClose, setLoading, setPromotionCodes }) => {
  const { updatePromoCode, getAllPromoCodes } = useContext(createApiContext);
  const [discount, setDiscount] = useState("");
  const [usage, setUsage] = useState("");
  const [promo, setPromo] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);

  const gene_promo = () => {
    if (promo) {
      return;
    }
    const codeGenerated = voucher_codes.generate({
      length: 8,
      count: 1,
      charset: voucher_codes.charset("alphanumeric"),
    });
    setPromo(codeGenerated[0]);
  };
  const handleUpdatePromo = async (id, data) => {
    setUpdateLoading(true);
    const response = await updatePromoCode(id, data);
    if (response.status == 'success') {
      //   setDiscount("");
      //   setUsage("");
      //   setPromo("");
      toast.success("Promotion updated successfully");
      // const response = await getAllPromoCodes();
      setPromotionCodes(prev => !prev);
      setUpdateLoading(false);
      setLoading(false);

      onClose();
    } else if (response.response.data.message) {
      toast.error(response.response.data.message);
      setUpdateLoading(false);

      console.log(response.response.data.message);
    }
  };

  useEffect(() => {
    if (promoData) {
      setDiscount(promoData.discountPercentage);
      setUsage(promoData.maxUsage);
      setPromo(promoData.code);
    }
  }, [promoData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("discountPercentage", discount);
    formData.append("maxUsage", usage);
    formData.append("code", promo);
    handleUpdatePromo(promoData._id, formData);
  };
  return (
    <div className="popUp">
      {updateLoading && <LoadingModal />}
      <div className="popbox">
        <div className="right">
          <span className="close" onClick={onClose}>
            <GrFormClose />
          </span>
        </div>
        <form className="update_promo_code" onSubmit={handleSubmit}>
          <div className="generate_promo_code">
            <button type="button" className="gene_promo" onClick={gene_promo}>
              {promo ? promo : "Generate promo code"}
            </button>
            {/* <Loader /> */}
          </div>
          <InputContainer
            label={"discount"}
            id={"discount"}
            type={"text"}
            value={discount}
            name={"discount"}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <InputContainer
            label={"max usage"}
            id={"usage"}
            type={"text"}
            value={usage}
            name={"usage"}
            onChange={(e) => setUsage(e.target.value)}
          />
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePromo;

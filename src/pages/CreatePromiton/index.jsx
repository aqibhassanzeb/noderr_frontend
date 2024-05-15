import React, { useContext, useState } from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../components/dashboard/InputContainer";
import { createApiContext } from "../../context/apiContext";
import voucher_codes from "voucher-code-generator";
import LoadingModal from "../../components/ApiLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { images } from "../../images";
import { IoArrowBackCircle } from "react-icons/io5";

const CreatePrmotion = () => {
  const navigate = useNavigate();
  const { generatePromoCode } = useContext(createApiContext);
  const handleCloseCreate = () => {
    navigate("/dashboard/all-promotion-codes");
  };

  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState("");
  const [usage, setUsage] = useState("");
  const [loading, setLoading] = useState(false);

  //generate the promo code fn
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

  //handle the promo code creation fn
  const handlePromoCreate = async (data) => {
    setLoading(true);
    const response = await generatePromoCode(data);
    if (response.status == "success") {
      setDiscount("");
      setUsage("");
      setPromo("");
      toast.success("Promotion created successfully");
      setLoading(false);
      navigate("/dashboard/all-promotion-codes");
    } else if (response.response.data.message) {
      console.log(response.response.data.message);
      toast.error(response.response.data.message);
      setLoading(false);
    }
  };

  //submit the form fn
  const submitHandler = (e) => {
    e.preventDefault();
    const promoData = {
      discountPercentage: discount,
      maxUsage: usage,
      code: promo,
    };
    handlePromoCreate(promoData);
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <div className="">
            <span className="close" onClick={handleCloseCreate}>
              <IoArrowBackCircle className="text-white w-8 h-8" />
            </span>
          </div>
          <PageHeader
            page_title={"Create Promotion"}
            badge={"GM, Noderr"}
            profilePic={images.FakePic}
          />
          <form className="promo_code_form" onSubmit={submitHandler}>
            <div className="generate_promo_code">
              <button type="button" className="gene_promo" onClick={gene_promo}>
                {promo ? promo : "Generate promo code"}
              </button>
            </div>
            <InputContainer
              label={"discount"}
              id={"discount"}
              type={"number"}
              value={discount}
              name={"discount"}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <InputContainer
              label={"max usage"}
              id={"usage"}
              type={"number"}
              value={usage}
              name={"usage"}
              onChange={(e) => setUsage(e.target.value)}
            />
            <button type="submit" className="btn primary">
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePrmotion;

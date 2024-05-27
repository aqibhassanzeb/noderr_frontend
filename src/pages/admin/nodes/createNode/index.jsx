import React, { useContext, useState } from "react";
import "./index.css";
import PageHeader from "../../../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../../../components/dashboard/InputContainer";
import { images } from "../../../../images";
import { createApiContext } from "../../../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const CreateNode = () => {

  const navigate = useNavigate();
  const handleCloseCreate = () => {
    navigate("/dashboard/all-nodes");
  };

  const { createNode } = useContext(createApiContext);
  const [name, setName] = useState("");
  const [price1, setPrice1] = useState("");
  const [price3, setPrice3] = useState("");
  const [price6, setPrice6] = useState("");
  const [price12, setPrice12] = useState("");
  const [price24, setPrice24] = useState("");
  const [slots, setSlots] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);

  //upload image function
  const uploadImage = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      setImageFile(file);
      console.log();
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  //create node function
  const handleNodeCreate = async (data) => {
    setLoading(true);
    const response = await createNode(data);
    console.log(response);
    setLoading(false);
    if (response?.status == "success") {
      setName("");
      setPrice1("");
      setPrice3("");
      setPrice6("");
      setPrice12("");
      setPrice24("");
      setSlots("");
      setBgcolor("");
      setImage("");
      setImagePreview("");
      toast.success("Node created successfully");
      navigate("/dashboard/all-nodes");
    } else if (response?.message) {
      setLoading(false);
      toast.error(response.message);
    }
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !slots || !bgcolor || !image || !price1 || !price3 || !price6 || !price12 || !price24) {
      return toast.error("Please fill all the Input fields");
    }
    // const data = {
    //   nodeName: name,
    //   nodePrice: Object.assign({ price1, price3, price6, price12, price24 }),
    //   slots: Number(slots),
    //   bgColor: bgcolor,
    //   myFile: imageFile,
    // };
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });
    // handleNodeCreate(formData);
    const data = {
      nodeName: name,
      slots: Number(slots),
      bgColor: bgcolor,
      myFile: imageFile,
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append the prices individually
    formData.append('nodePrice[price1]', price1);
    formData.append('nodePrice[price3]', price3);
    formData.append('nodePrice[price6]', price6);
    formData.append('nodePrice[price12]', price12);
    formData.append('nodePrice[price24]', price24);

    handleNodeCreate(formData);
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <div className="mb-2">
            <span className="close" onClick={handleCloseCreate}>
              <IoArrowBackCircle className="text-white w-8 h-8" />
            </span>
          </div>
          <PageHeader page_title={"Create Node"} badge={"GGM, Noderr"} />
          <form className="node_create_form" onSubmit={submitHandler}>
            <InputContainer
              label={"Node Name"}
              id={"node_name"}
              type={"text"}
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <InputContainer
              label={"node price 1 month"}
              id={"node_price1"}
              type={"text"}
              name="price1"
              value={price1}
              onChange={(e) => setPrice1(e.target.value)}
            />
            <InputContainer
              label={"node price 3 months"}
              id={"node_price3"}
              type={"text"}
              name="price3"
              value={price3}
              onChange={(e) => setPrice3(e.target.value)}

            />
            <InputContainer
              label={"node price 6 months"}
              id={"node_price6"}
              type={"text"}
              name="price6"
              value={price6}
              onChange={(e) => setPrice6(e.target.value)}
            />
            <InputContainer
              label={"node price 12 months"}
              id={"node_price12"}
              type={"text"}
              name="price12"
              value={price12}
              onChange={(e) => setPrice12(e.target.value)}
            />
            <InputContainer
              label={"node price 24 months"}
              id={"node_price24"}
              type={"text"}
              name="price24"
              value={price24}
              onChange={(e) => setPrice24(e.target.value)}
            />
            <InputContainer
              label={"slots"}
              id={"slots"}
              type={"number"}
              name="slots"
              value={slots}
              onChange={(e) => setSlots(e.target.value)}
            />
            <InputContainer
              label={"background Color"}
              id={"bgcolor"}
              type={"text"}
              value={bgcolor}
              name="bgcolor"
              onChange={(e) => setBgcolor(e.target.value)}
            />
            <div className="input_file">
              <label htmlFor="Ffile">Node Image</label>
              <label htmlFor="dropzone-file" className="upload_image">
                <div className="upload_sign">
                  <p style={{ color: "#000000" }}>upload image</p>
                  <div className="image_container">
                    <img src={images.uploadSign} alt="uploadSign" />
                  </div>
                </div>
                <input
                  type="file"
                  id="dropzone-file"
                  style={{ display: "none" }}
                  alt="uploadSign"
                  name="avatar"
                  accept="image/*"
                  onChange={uploadImage}
                />
              </label>
              <div className="image_preview">
                {image && imagePreview && (
                  <img
                    src={imagePreview}
                    alt="imagePreview"
                    className="w-[40px]"
                  />
                )}
              </div>
            </div>
            <button type="submit" className="btn primary">
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNode;

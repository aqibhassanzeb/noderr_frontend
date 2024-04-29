import React, { useContext, useState } from "react";
import "./index.css";
import PageHeader from "../../../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../../../components/dashboard/InputContainer";
import { images } from "../../../../images";
import { createApiContext } from "../../../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
const CreateNode = () => {
  const navigate = useNavigate();
  const { createNode } = useContext(createApiContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [slots, setSlots] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(image, imagePreview);
  const uploadImage = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      console.log();
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
          setImage(reader.result);
        }
      };
      // reader.onloadend = () => {
      //   setImage(file);
      //   setImagePreview(reader.result);
      // };
      reader.readAsDataURL(file);
    }
  };
  const handleNodeCreate = async (data) => {
    setLoading(true);

    const response = await createNode(data);
    console.log(response);
    setLoading(false);
    if (response?.status=='success') {
      setName("");
      setPrice("");
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !price || !slots || !bgcolor || !image) {
      return toast.error('Please fill all the Input fields'); 
      
    }

    const data = {
      nodeName: name,
      nodePrice: Number(price),
      slots: Number(slots),
      bgColor: bgcolor,
      avatar: image,
  };
  
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
  });
  
  handleNodeCreate(formData);
  
  };
  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
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
              label={"node price"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              {/* <div className="image_preview">
                {image && imagePreview && (
                  <img src={imagePreview} alt="imagePreview" />
                )}
              </div> */}
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

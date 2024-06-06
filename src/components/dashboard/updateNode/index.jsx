import React, { useContext, useEffect } from "react";
import "./index.css";
import { toast } from "react-toastify";
import LoadingModal from "../../ApiLoader";
import InputContainer from "../InputContainer";
import { images } from "../../../images";
import { GrFormClose } from "react-icons/gr";
import { createApiContext } from "../../../context/apiContext";
import axios from "axios";
const UpdateNode = ({ node, onClose, setNodes, setLoading, }) => {
  const { updateNode, getAllNodes } = useContext(createApiContext);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState({});
  console.log("🚀 ~ UpdateNode ~ price:", price)
  const [slots, setSlots] = React.useState("");
  const [bgcolor, setBgcolor] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const [updateLoading, setUpdateLoading] = React.useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setName(node?.nodeName);
    setPrice(node?.nodePrice);
    setSlots(node?.slots);
    setBgcolor(node?.bgColor);
    setImagePreview(`${process.env.REACT_APP_NODE_IMG_URL}${node?.nodeImage?.url}`);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const updateNodeHandler = async (id, formData) => {
    setUpdateLoading(true);
    setLoading(true);
    const data = await updateNode(id, formData);
    setUpdateLoading(false);
    if (data.status == 'success') {
      toast.success("Node updated successfully");
      // const response = await getAllNodes();
      // setNodes(response);
      setLoading(false);

      onClose();
    } else if (data.message) {
      toast.error(data.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.onerror = () => {
        console.error("Error occurred while reading the file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const resData = {
      nodeName: name,
      nodePrice: price,
      slots: slots,
      bgColor: bgcolor,
    };
    updateNodeHandler(node._id, resData);
    // const formData = new FormData();
    // formData.append("nodeName", name);
    // formData.append("nodePrice", priceString);
    // formData.append("slots", slots);
    // formData.append("bgColor", bgcolor);
    // formData.append("myFile", image);
    // updateNodeHandler(node._id, formData);
  };

  return (
    <>
      <div className="popUp">
        {updateLoading && <LoadingModal />}
        {/* {<LoadingModal />} */}
        <div className="popbox">
          <div className="right">
            <span className="close" onClick={onClose}>
              <GrFormClose />
            </span>
          </div>

          <form className="update_node_form" onSubmit={submitHandler}>
            <InputContainer
              label={"Node Name"}
              id={"node_name"}
              type={"text"}
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <InputContainer
              label={"node price for 1 month"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price.price1}
              onChange={(e) => setPrice({ ...price, price1: e.target.value })}
            />

            <InputContainer
              label={"node price for 3 months"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price.price3}
              onChange={(e) => setPrice({ ...price, price3: e.target.value })}
            />

            <InputContainer
              label={"node price for 6 months"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price.price6}
              onChange={(e) => setPrice({ ...price, price6: e.target.value })}
            />

            <InputContainer
              label={"node price for 12 months"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price.price12}
              onChange={(e) => setPrice({ ...price, price12: e.target.value })}
            />

            <InputContainer
              label={"node price for 24 months"}
              id={"node_price"}
              type={"text"}
              name="price"
              value={price.price24}
              onChange={(e) => setPrice({ ...price, price24: e.target.value })}
            />

            <InputContainer
              label={"slots"}
              id={"slots"}
              type={"text"}
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
                  onChange={handleFileChange}
                />
              </label>
              <div className="image_preview">
                {imagePreview && <img src={imagePreview} alt="imagePreview" className="w-12 h-10" />}
              </div>
            </div>
            <button type="submit" className="btn primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateNode;

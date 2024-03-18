import React, { useContext, useEffect } from "react";
import "./index.css";
import { toast } from "react-toastify";
import LoadingModal from "../../ApiLoader";
import InputContainer from "../InputContainer";
import { images } from "../../../images";
import { GrFormClose } from "react-icons/gr";
import { createApiContext } from "../../../context/apiContext";
const UpdateNode = ({ node, onClose, setPromotionCodes, setLoading }) => {
  const { updateNode, getAllNodes } = useContext(createApiContext);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
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
    setImagePreview(node?.nodeImage.url);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const updateNodeHandler = async (id, formData) => {
    setUpdateLoading(true);
    setLoading(true)
    const data = await updateNode(id, formData);
    console.log(data);
    if (data.success) {
      setUpdateLoading(false);
      toast.success("Node updated successfully");
      const response = await getAllNodes();
      setPromotionCodes(response);
      setLoading(false);

      onClose();
    } else if (data.response.data.message) {
      setUpdateLoading(false);
      toast.error(data.response.data.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("nodeName", name);
    formData.append("nodePrice", price);
    formData.append("slots", slots);
    formData.append("bgColor", bgcolor);
    formData.append("avatar", image);
    console.log(formData);
    updateNodeHandler(node._id, formData);
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
                  //   onChange={uploadImage}
                />
              </label>
              <div className="image_preview">
                {imagePreview && <img src={imagePreview} alt="imagePreview" />}
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

export default UpdateNode;

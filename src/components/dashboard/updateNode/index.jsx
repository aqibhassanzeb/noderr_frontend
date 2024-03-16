import React, { useEffect } from "react";
import "./index.css";
import { toast } from "react-toastify";
import LoadingModal from "../../ApiLoader";
import InputContainer from "../InputContainer";
import { images } from "../../../images";
import { GrFormClose } from "react-icons/gr";
const UpdateNode = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [slots, setSlots] = React.useState("");
  const [bgcolor, setBgcolor] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="popUp">
        {/* {<LoadingModal />} */}
        <div className="popbox">
          <div className="right">
            <span
              className="close"
              // onClick={onClose}
            >
              <GrFormClose />
            </span>
          </div>

          <form
            className="update_node_form"
            // onSubmit={submitHandler}
          >
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
                {image && imagePreview && (
                  <img src={imagePreview} alt="imagePreview" />
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

export default UpdateNode;

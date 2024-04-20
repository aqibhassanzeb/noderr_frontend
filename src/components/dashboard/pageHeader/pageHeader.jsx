import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { images } from "../../../images";

const PageHeader = ({ page_title, badge, create, link }) => {
  return (
    <>
      <div className="title_container">
        <div className="header">
          <span className="left">{badge}</span>
          <Link to={"/dashboard/edit-profile"} className="profile_img">
                <img src={images.profileCircle} />
              </Link>
          {/* <Togglor/> */}
          {create && (
            <Link className="connect_wallet_btn" to={link}>
              create
            </Link>
          )}
        </div>
        <h2 className="page_title">{page_title}</h2>
 
      </div>
    </>
  );
};

export default PageHeader;

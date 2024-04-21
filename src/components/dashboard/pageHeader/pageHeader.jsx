import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { images } from "../../../images";

const PageHeader = ({ page_title, badge, create, link, profilePic }) => {
  console.log('profilePic', profilePic, images.profileCircle)
  return (
    <>
      <div className="title_container">
        <div className="header">
          <span className="left" style={{display:'flex', alignItems:'center'}}>
          <div class="round-img-container">

            <img src={profilePic} />
            </div>

          <p style={{marginLeft:10, marginTop:10,fontSize:18, fontWeight:'bold'}}>
          {badge}
          </p>
          </span>
          {/* <Link to={"/dashboard/edit-profile"} className="profile_img">
                <img src={images.profileCircle} />
              </Link> */}
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

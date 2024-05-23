import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const PageHeader = ({ page_title, badge, create, link, profilePic }) => {
  return (
    <>
      <div className="title_container ">
        <div className="header">
          <span className="left " style={{ display: 'flex', alignItems: 'center',  }}>
            <div className="round-img-container">
              <img src={profilePic} alt="Profile" width={100} height={100}
              />
            </div>
            <p style={{ marginLeft: 10, marginTop: 10, fontSize: 18, fontWeight: 'bold', }}>
              {badge}
            </p>
          </span>
          {/* <Link to={"/dashboard/edit-profile"} className="profile_img">
                <img src={images.profileCircle} />
              </Link> */}
          {/* <Togglor/> */}
          {create && (
            <Link className="connect_wallet_btn " to={link}>
              create
            </Link>
          )}
        </div>
        <h2 className="page_title ">{page_title}</h2>

      </div>
    </>
  );
};

export default PageHeader;

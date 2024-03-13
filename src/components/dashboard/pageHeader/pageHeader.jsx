import React from "react";

const PageHeader = ({page_title,badge}) => {
  return (
    <>
      <div className="header">
        <span className="left">{badge}</span>
        {/* <Togglor/> */}
        {/* <button className="connect_wallet_btn">connect wallet</button> */}
      </div>
      <h2 className="page_title">{page_title}</h2>
    </>
  );
};

export default PageHeader;

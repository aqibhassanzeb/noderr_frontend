import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
const PromoLoader = ({skeletonCount}) => {

  return (
    <div className="promo_skeleton_loader">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton className="promo_node_loader" key={index} />
      ))}
    </div>
  );
};

export default PromoLoader;

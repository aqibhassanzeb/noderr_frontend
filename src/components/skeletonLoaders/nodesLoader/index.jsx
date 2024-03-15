import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
const NodeLoader = ({ skeletonCount }) => {
  return (
    <div className="nodes_skeleton_loader">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton className="node_loader" key={index} />
      ))}
    </div>
  );
};

export default NodeLoader;

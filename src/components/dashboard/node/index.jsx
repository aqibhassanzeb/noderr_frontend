import React from "react";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Node = ({ node, onDelete }) => {
  return (
    <div className="single_node" style={{ background: node.bgColor }}>
      <div className="node_img">
        <img src={node.nodeImage.url} alt="node" />
      </div>
      <div className="node_detail">
        <div className="detail">
          <h4 className="node_name">{node.nodeName}</h4>
          <span className="node_slot">slots: {node.slots}</span>
        </div>
        <div className="mange">
          <i>
            <CiEdit />
          </i>
          <i onClick={onDelete}>
            <MdDeleteOutline />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Node;

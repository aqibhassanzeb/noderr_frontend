import React from "react";
import "./index.css";
import CURDBtn from "../../CURDBtn";
import { TiTickOutline } from "react-icons/ti";
const Vote = () => {
  return (
    <div className="vote">
      <h3 className="title">title</h3>
      <div className="vote_opt">
        <ol className="vote_options">
          <li className="option">
            <span className="tick">
              <TiTickOutline />
            </span>
            <span className="text">list 1</span>
          </li>
          <li className="option">
            <span className="tick">
              <TiTickOutline />
            </span>
            <span className="text">list 1</span>
          </li>
          <li className="option">
            <span className="tick">
              <TiTickOutline />
            </span>
            <span className="text">list 1</span>
          </li>
          <li className="option">
            <span className="tick">
              <TiTickOutline />
            </span>
            <span className="text">list 1</span>
          </li>
        </ol>
        <span className="status">Number of votes by user :12</span>
      </div>

      <div className="vote_time">
        <span className="start_time">start time</span>
        <span className="end_time">end time</span>
      </div>
      <div className="crud_btns">
        <CURDBtn />
      </div>
    </div>
  );
};

export default Vote;

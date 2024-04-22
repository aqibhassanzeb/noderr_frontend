import React from "react";
import "./index.css";
import CURDBtn from "../../CURDBtn";
import { TiTickOutline } from "react-icons/ti";
const Vote = ({ voteData: vote, onDelete, onEdit }) => {
  return (
    <div className="vote">
      <h3 className="title">{vote?.voteTitle}</h3>
      <div className="vote_opt">
        <ol className="vote_options">
          {vote?.voteOptions
            .slice()
            .reverse()
            .map((option, index) => (
              <li className="option" key={index}>
                <span className="tick">
                  <TiTickOutline />
                </span>
                <span className="text">{option}</span>
              </li>
            ))}
        </ol>
        <span className="status">
          Number of votes by user : {vote?.votes?.length}
        </span>
      </div>

      <div className="vote_time">
        <div className="start_time">
          <span>start time</span>
          <span>{new Date(vote?.startTime).toLocaleDateString()}</span>
        </div>
        <div className="end_time">
          {" "}
          <span>end time</span>
          <span>{new Date(vote?.endTime).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="crud_btns">
        <CURDBtn onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default Vote;

import React from "react";
import { AiFillGithub as Git } from "react-icons/ai";

import "./card.scss";
function Card({ ...props }) {
  return (
    <div className="card">
      <div className="p-img">
        <img src={props.img} alt="project img" />
      </div>
      <div className="description">
        <div className="head">
          <h2>{props.head}</h2>
          <p>{props.des}</p>
        </div>
        <div className="button">
          <a href={props.link}>
            <Git />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

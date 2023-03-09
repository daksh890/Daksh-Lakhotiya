import React from "react";
import Vector1 from "../../../Assets/Vector-1.png";
import { TypingWay } from "../typo";
import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";
import "./mobileTop.scss";
import { user } from "../../user";
function MobileTop() {
  return (
    <div className="mobile-top">
      <div className="bg-vector">
        <img src={Vector1} alt="vector" />
      </div>
      <div className="intro">
        <div className="typing">
          <TypingWay />
        </div>
        <div className="persona-wrap">
          <div className="persona">
            <p>Developer, Leader, Innovator</p>
          </div>
          <div className="icons">
            <ul className="icons-list">
              <li className="icons-list-list">
                <a href={user.leetcode}>
                  <Leet />
                </a>
              </li>
              <li className="icons-list-list">
                <a href={user.linkedin}>
                  <Linked />
                </a>
              </li>
              <li className="icons-list-list">
                <a href={user.email}>
                  <Mail />
                </a>
              </li>
              <li className="icons-list-list">
                <a href={user.twitter}>
                  <Tweet />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTop;

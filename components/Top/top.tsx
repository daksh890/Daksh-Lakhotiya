"use client";

import { TypingWay } from "./typo";
import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";
import { user } from "../user";
import { assetPath } from "../../lib/assetPath";
import "./top.scss";

function Top(): JSX.Element {
  return (
    <div className="top">
      <div className="Vedio">
        <video id="bg-ved" controls={false} muted autoPlay loop playsInline>
          <source src={assetPath("/assets/PostEdit.mp4")} type="video/mp4" />
        </video>
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

export default Top;

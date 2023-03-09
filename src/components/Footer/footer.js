import React from "react";
import { user } from "../user";
import "./footer.scss";

import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";

function Footer() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    // console.log("Hello!!");
    fetch("Daksh-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Daksh-resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="head">
          <h1>Daksh Lakhotiya</h1>
          <div className="md-line"></div>
        </div>
        <div className="persona">
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
        <div className="pdf">
          <button onClick={onButtonClick}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

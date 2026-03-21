"use client";

import { TypingWay } from "../Top/typo";
import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";
import { user } from "../user";
import { assetPath } from "../../lib/assetPath";

function MobileTop(): JSX.Element {
  return (
    <div
      className="mobile-top-section relative h-[70vh] flex box-border
        before:content-[''] before:block before:absolute before:left-0 before:top-0
        before:w-full before:h-[70vh] before:opacity-80
        before:bg-[image:var(--bg-photo)] before:bg-no-repeat before:bg-right
        before:z-[-4]"
      style={
        {
          "--bg-photo": `url(${assetPath("/assets/photo-view.jfif")})`,
        } as React.CSSProperties
      }
    >
      <div className="absolute top-0 right-[-20px]">
        <img
          src={assetPath("/assets/Vector-1.png")}
          alt="vector"
          className="h-[70vh] w-[80vw]"
        />
      </div>

      <div className="text-left flex flex-col justify-start absolute top-[25vh] left-[10vw] h-[30vh] w-[70vw]">
        <div className="relative text-[1.5rem] text-[rgb(0,3,6)] font-bold min-h-[9vh] z-20">
          <TypingWay />
        </div>
        <div className="relative animate-fade-in">
          <div className="relative ml-0 mb-2">
            <p className="text-[rgb(226,55,68)] capitalize text-[0.8rem] font-medium tracking-[3px]">
              Developer, Leader, Innovator
            </p>
          </div>
          <div className="flex text-[#6b8e23] text-[1rem] ml-0 relative w-[30%]">
            <ul className="flex list-none justify-start w-full m-0 p-0">
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.leetcode} className="text-[#6b8e23]">
                  <Leet />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.linkedin} className="text-[#6b8e23]">
                  <Linked />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.email} className="text-[#6b8e23]">
                  <Mail />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.twitter} className="text-[#6b8e23]">
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

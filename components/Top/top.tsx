"use client";

import { TypingWay } from "./typo";
import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";
import { user } from "../user";
import { assetPath } from "../../lib/assetPath";

function Top(): JSX.Element {
  return (
    <div className="top-section mx-auto box-border min-h-screen overflow-hidden">
      <div className="box-border text-white relative overflow-hidden h-full w-full">
        <video
          id="bg-ved"
          controls={false}
          muted
          autoPlay
          loop
          playsInline
          className="w-screen h-screen object-cover fixed top-0 left-0 opacity-90 brightness-[85%]"
        >
          <source src={assetPath("/assets/PostEdit.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="text-left flex flex-col justify-start absolute top-[25vh] left-[10vw] h-[40vh] w-[90vw]">
        <div className="relative text-[2.5rem] text-white font-bold min-h-[15vh] max-[800px]:min-h-[11vh]">
          <TypingWay />
        </div>
        <div className="relative animate-fade-in">
          <div className="relative ml-0 mb-[0.8rem]">
            <p className="text-white capitalize text-[1.1rem] font-medium tracking-[3px]">
              Developer, Leader, Innovator
            </p>
          </div>
          <div className="flex text-white text-[2rem] ml-0 relative w-[30%]">
            <ul className="flex list-none justify-start w-full m-0 p-0">
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.leetcode} className="text-white">
                  <Leet />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.linkedin} className="text-white">
                  <Linked />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.email} className="text-white">
                  <Mail />
                </a>
              </li>
              <li className="block flex-none mr-8 hover:cursor-pointer">
                <a href={user.twitter} className="text-white">
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

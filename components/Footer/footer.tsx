"use client";

import { user } from "../user";
import { assetPath } from "../../lib/assetPath";
import {
  TiSocialLinkedin as Linked,
  TiSocialTwitter as Tweet,
} from "react-icons/ti";
import { SiLeetcode as Leet, SiGmail as Mail } from "react-icons/si";

function Footer(): JSX.Element {
  const onButtonClick = (): void => {
    fetch(assetPath("/Daksh-resume.pdf")).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Daksh-resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="relative min-h-[50vh] w-full pb-16 pt-12 bg-[rgb(226,235,226)]">
      <div className="w-[70%] mx-auto pt-16 flex flex-col items-center">
        <div className="items-center text-center flex flex-col justify-start">
          <h1 className="text-[2.1rem] uppercase tracking-[2px] font-semibold">
            Daksh Lakhotiya
          </h1>
          <div className="inline-block mt-2 h-1 w-1/2 rounded-[50px] bg-gray-500"></div>
        </div>

        <div className="mt-6 mb-8 flex flex-row items-center justify-center w-[30vw] max-[700px]:w-[50vw]">
          <div className="flex text-[rgb(100,96,96)] text-[2.4rem] relative w-full">
            <ul className="flex list-none items-center justify-between w-full m-0 p-0">
              <li className="block flex-none transition-all duration-300 ease-in-out hover:scale-[1.3]">
                <a
                  href={user.leetcode}
                  className="text-[rgb(100,96,96)] hover:text-[rgb(87,2,87)] hover:cursor-pointer"
                >
                  <Leet />
                </a>
              </li>
              <li className="block flex-none transition-all duration-300 ease-in-out hover:scale-[1.3]">
                <a
                  href={user.linkedin}
                  className="text-[rgb(100,96,96)] hover:text-[rgb(87,2,87)] hover:cursor-pointer"
                >
                  <Linked />
                </a>
              </li>
              <li className="block flex-none transition-all duration-300 ease-in-out hover:scale-[1.3]">
                <a
                  href={user.email}
                  className="text-[rgb(100,96,96)] hover:text-[rgb(87,2,87)] hover:cursor-pointer"
                >
                  <Mail />
                </a>
              </li>
              <li className="block flex-none transition-all duration-300 ease-in-out hover:scale-[1.3]">
                <a
                  href={user.twitter}
                  className="text-[rgb(100,96,96)] hover:text-[rgb(87,2,87)] hover:cursor-pointer"
                >
                  <Tweet />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="group">
          <button
            onClick={onButtonClick}
            className="bg-transparent w-44 h-12 text-base font-semibold transition-all duration-500 ease-in-out group-hover:cursor-pointer group-hover:bg-[rgb(87,2,87)] group-hover:text-white"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

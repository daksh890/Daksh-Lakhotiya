"use client";

import Typewriter from "typewriter-effect";

export const TypingWay = (): JSX.Element => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            const video = document.getElementById(
              "bg-ved"
            ) as HTMLVideoElement | null;
            if (video == null) return;
            video.play();
          })
          .typeString("Hi, <br>")
          .pauseFor(500)
          .typeString("I'm <span>Daksh Lakhotiya.</span>")
          .pauseFor(500)
          .deleteChars(16)
          .typeString("<span>a Developer.</span>")
          .pauseFor(500)
          .deleteChars(12)
          .typeString("<span>an Innovator.</span>")
          .pauseFor(500)
          .deleteChars(12)
          .typeString("<span> Leader.</span>")
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
      options={{
        loop: true,
      }}
    />
  );
};

interface HeadingProps {
  setShow: (show: boolean) => void;
}

export const Heading = ({ setShow }: HeadingProps): JSX.Element => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1500)
          .typeString("The Modern World is a Simulation by Developers.")
          .pauseFor(1000)
          .changeDeleteSpeed(1)
          .deleteAll()
          .start()
          .callFunction(() => {
            const cur = document.getElementsByClassName(
              "Typewriter__cursor"
            ) as HTMLCollectionOf<HTMLElement>;
            cur[0].innerText = "";
          })
          .pauseFor(500)
          .callFunction(() => {
            const video = document.getElementById(
              "bg-ved"
            ) as HTMLVideoElement | null;
            if (video == null) return;
            video.play();
            setShow(true);
          });
      }}
    />
  );
};

import Typewriter from "typewriter-effect";
export const TypingWay = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            const vedio = document.getElementById("bg-ved");
            if (vedio == null) return;
            vedio.play();
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

export const Heading = ({ setShow }) => {
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
          .callFunction((e) => {
            const cur = document.getElementsByClassName("Typewriter__cursor");
            cur[0].innerText = "";
          })
          .pauseFor(500)
          .callFunction(() => {
            const vedio = document.getElementById("bg-ved");
            vedio.play();
            setShow(true);
          });
      }}
    />
  );
};

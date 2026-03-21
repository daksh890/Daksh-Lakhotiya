import Card from "./Card/Card";
import { assetPath } from "../../lib/assetPath";

function Projects(): JSX.Element {
  return (
    <div className="relative m-0 p-0 pb-48 w-screen bg-[whitesmoke] box-border">
      <div className="mx-auto pt-12 mb-0 flex flex-col items-center w-[90%]">
        <div className="flex flex-col items-center justify-center mb-32">
          <h1 className="text-[1.8rem] uppercase tracking-[3px] font-semibold">
            Projects
          </h1>
          <div className="mt-2 h-1 w-[60px] rounded-[50px] bg-gray-500"></div>
        </div>

        <div
          className="w-full relative grid gap-y-10 gap-x-[30px]
            grid-cols-[repeat(3,28vw)]
            max-[600px]:grid-cols-[repeat(1,60vw)] max-[600px]:items-center max-[600px]:justify-center"
        >
          <div>
            <Card
              img={assetPath("/assets/spotify.webp")}
              head="Spotify Clone"
              des="Music Application / Dec 2022"
              link="https://github.com/daksh890/Spotify-Clone"
            />
          </div>
          <div>
            <Card
              img={assetPath("/assets/JS.jfif")}
              head="30 Days of Javascript Challenge"
              des="Core JS Concepts / Dec 2022"
              link="https://github.com/daksh890/30_days_of_JS"
            />
          </div>
          <div>
            <Card
              img={assetPath("/assets/Trading.jpg")}
              head="Trading Bot"
              des="Python Bot / Nov 2021"
              link="https://github.com/daksh890/TradingBot"
            />
          </div>
          <div>
            <Card
              img={assetPath("/assets/calendar.png")}
              head="Google Calender Clone"
              des="Web Application / Jun 2022"
              link="https://github.com/daksh890/Google-Calendar"
            />
          </div>
          <div>
            <Card
              img={assetPath("/assets/shopping-cart.jpg")}
              head="Shopping Cart"
              des="Web Application / Jan 2022"
              link="https://github.com/daksh890/shopping-cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

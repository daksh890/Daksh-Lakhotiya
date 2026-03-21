import Card from "./Card/Card";
import "./blogs.scss";

function Projects(): JSX.Element {
  return (
    <div className="projects">
      <div className="p-container">
        <div className="heading-top">
          <h1 className="head">Projects</h1>
          <div className="md-line"></div>
        </div>

        <div className="p-main">
          <div className="p-item-1">
            <Card
              img="/assets/spotify.webp"
              head="Spotify Clone"
              des="Music Application / Dec 2022"
              link="https://github.com/daksh890/Spotify-Clone"
            />
          </div>
          <div className="p-item-2">
            <Card
              img="/assets/JS.jfif"
              head="30 Days of Javascript Challenge"
              des="Core JS Concepts / Dec 2022"
              link="https://github.com/daksh890/30_days_of_JS"
            />
          </div>
          <div className="p-item-3">
            <Card
              img="/assets/Trading.jpg"
              head="Trading Bot"
              des="Python Bot / Nov 2021"
              link="https://github.com/daksh890/TradingBot"
            />
          </div>
          <div className="p-item-4">
            <Card
              img="/assets/calendar.png"
              head="Google Calender Clone"
              des="Web Application / Jun 2022"
              link="https://github.com/daksh890/Google-Calendar"
            />
          </div>
          <div className="p-item-5">
            <Card
              img="/assets/shopping-cart.jpg"
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

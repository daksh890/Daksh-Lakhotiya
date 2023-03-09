import React from "react";
import Card from "./Project/Card";
import "./blogs.scss";
import spotify from "./../../Assets/spotify.webp";
import calendar from "./../../Assets/calendar.png";
import cart from "./../../Assets/shopping-cart.jpg";
import trading from "./../../Assets/Trading.jpg";
import java from "./../../Assets/JS.jfif";

function Projects() {
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
              img={spotify}
              head="Spotify Clone"
              des="Music Application / Dec 2022"
              link="https://github.com/daksh890/Spotify-Clone"
            />
          </div>
          <div className="p-item-2">
            <Card
              img={java}
              head="30 Days of Javascript Challenge"
              des="Core JS Concepts / Dec 2022"
              link="https://github.com/daksh890/30_days_of_JS"
            />
          </div>

          <div className="p-item-3">
            <Card
              img={trading}
              head="Trading Bot"
              des="Python Bot / Nov 2021"
              link="https://github.com/daksh890/TradingBot"
            />
          </div>
          <div className="p-item-4">
            <Card
              img={calendar}
              head="Google Calender Clone"
              des="Web Application / Jun 2022"
              link="https://github.com/daksh890/Google-Calendar"
            />
          </div>
          <div className="p-item-5">
            <Card
              img={cart}
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

import { AiFillGithub as Git } from "react-icons/ai";
import "./card.scss";

function Card({ img, head, des, link }) {
  return (
    <div className="card">
      <div className="p-img">
        <img src={img} alt="project img" />
      </div>
      <div className="description">
        <div className="head">
          <h2>{head}</h2>
          <p>{des}</p>
        </div>
        <div className="button">
          <a href={link}>
            <Git />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

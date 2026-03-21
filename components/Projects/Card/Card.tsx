import { AiFillGithub as Git } from "react-icons/ai";
import "./card.scss";

interface CardProps {
  img: string;
  head: string;
  des: string;
  link: string;
}

function Card({ img, head, des, link }: CardProps): JSX.Element {
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

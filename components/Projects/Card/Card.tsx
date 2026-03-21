import { AiFillGithub as Git } from "react-icons/ai";

interface CardProps {
  img: string;
  head: string;
  des: string;
  link: string;
}

function Card({ img, head, des, link }: CardProps): JSX.Element {
  return (
    <div className="w-[28vw] max-[600px]:w-[60vw] flex flex-col justify-start items-center hover:cursor-pointer group">
      <div className="mb-6 overflow-hidden">
        <img
          src={img}
          alt="project img"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <div className="w-full mb-4 px-4 box-border flex flex-row justify-between mt-0 text-center shadow-[0px_8px_8px_-7px_#222] transition-all duration-300 ease-in-out group-hover:pb-4">
        <div className="w-[60%] text-left mb-4">
          <h2 className="text-[0.8rem] uppercase font-semibold mb-4">{head}</h2>
          <p className="capitalize text-[1rem] text-[#ae9c84]">{des}</p>
        </div>
        <div className="transition-all duration-100 ease-in-out group-hover:text-[#83653f] group-hover:p-2 group-hover:border-2 group-hover:border-[rgb(187,29,187)] group-hover:rounded-[50px] group-hover:h-10 group-hover:shadow-[2px_2px_8px_-7px_rgb(187,29,187)]">
          <a
            href={link}
            className="border-none no-underline bg-transparent text-[2rem] flex items-center text-center cursor-pointer"
          >
            <Git />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

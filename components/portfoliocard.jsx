import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard({ image, link, title, description }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0 bg-center bg-cover"></div>
      <div className="relative h-full border-2 border-black dark:border-light">
        <div className="z-10">
          <Image src={image} alt={title} placeholder="blur" unoptimized priority />
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white duration-300 border opacity-0 bg-dark hover:bg-opacity-90 hover:opacity-100">
        <a href={link} target="_blank" rel="noreferrer" className="flex items-center text-md md:text-xl ">
          <h1 className="font-mono text-xl font-bold md:text-2xl hover:underline">{title}</h1>
          &nbsp;
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <p className="px-1 pt-2 font-sans text-base tracking-wider md:px-10 md:pt-5 md:text-lg">{description}</p>
      </div>
    </div>
  );
}

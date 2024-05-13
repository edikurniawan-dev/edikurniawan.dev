import { IconBrandInertiajs, IconBrandReactjs } from "@irsyadadl/paranoid";
import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-10">
        <div className="">
          <p className="mb-5 text-xl font-bold">Who am I .....?</p>
          <p>
            I'm <b>Edi kurniawan</b> a Web Developer with work experience in web application development. I have skills
            in developing web applications using several technologies like ReactJS with NextJS as react framework in
            frontend and Laravel or NodeJS in backend.
          </p>
        </div>
      </section>

      <Carousel />
    </>
  );
}

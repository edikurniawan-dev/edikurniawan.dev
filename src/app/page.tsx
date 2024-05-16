import { IconBrandInertiajs, IconBrandReactjs } from "@irsyadadl/paranoid";
import Image from "next/image";
import Carousel from "./components/Carousel";
import { SiLaravel, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import Link from "next/link";
import Tag from "./components/Tag";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-10">
        <div className="">
          <p className="mb-5 text-2xl font-bold">Who am I .....?</p>
          <div className="mt-4 leading-relaxed">
            I'm <b>Edi Kurniawan</b> a Web Developer with work experience in web application development. I have skills
            in developing web applications using several technologies like{" "}
            <Tag title="ReactJS" icon={<SiReact />} href="https://react.dev/" /> with{" "}
            <Tag title="NextJS" icon={<SiNextdotjs />} href="https://nextjs.org/" /> as react framework in frontend and
            <Tag title="Laravel" icon={<SiLaravel />} href="https://laravel.com/" /> or{" "}
            <Tag title="NodeJS" icon={<SiNodedotjs />} href="https://nodejs.org/" /> in backend.
          </div>
        </div>
      </section>

      <Carousel />
    </>
  );
}

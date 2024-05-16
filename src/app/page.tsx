import { IconBrandInertiajs, IconBrandReactjs } from "@irsyadadl/paranoid";
import Image from "next/image";
import Carousel from "./components/Carousel";
import { SiLaravel, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import Link from "next/link";
import Tag from "./components/Tag";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-10">
        <div className="">
          <p className="mb-5 text-2xl font-bold">Who am I .....?</p>
          <div className="mt-4 leading-relaxed">
            I'm <b>Edi Kurniawan</b> a Web Developer with work experience in web application development. I have skills
            in developing web applications using several technologies like{" "}
            <Badge variant="outline">
              <Link href="https://react.dev/" target="_blank" className="flex items-center gap-1">
                <SiReact />
                ReactJS
              </Link>
            </Badge>{" "}
            with{" "}
            <Badge variant="outline" className="gap-1">
              <Link href="https://nextjs.org/" target="_blank" className="flex items-center gap-1">
                <SiNextdotjs />
                NextJS
              </Link>
            </Badge>{" "}
            as react framework in frontend and
            <Badge variant="outline" className="gap-1">
              <Link href="https://laravel.com/" target="_blank" className="flex items-center gap-1">
                <SiLaravel />
                Laravel{" "}
              </Link>
            </Badge>{" "}
            or{" "}
            <Badge variant="outline" className="gap-1">
              <Link href="https://nodejs.org/" target="_blank" className="flex items-center gap-1">
                <SiNodedotjs />
                NodeJS
              </Link>
            </Badge>{" "}
            in backend.
          </div>
        </div>
      </section>

      <Carousel />
    </>
  );
}

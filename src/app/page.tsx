import Link from "next/link";
import { SiLaravel, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="mx-auto mt-5 flex max-w-4xl flex-col items-center gap-10 md:mt-0 md:flex-row">
          <p className="w-auto items-center text-center text-5xl font-bold">Who am I .....?</p>
          <div className="flex-1 leading-relaxed">
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

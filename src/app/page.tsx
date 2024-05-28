import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Badge } from "@/components/ui/badge";
import {
  SiAntdesign,
  SiCapacitor,
  SiCpanel,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiInertia,
  SiJavascript,
  SiLaragon,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Home() {
  const icons = [
    {
      name: <SiReact className="size-9" />,
    },
    {
      name: <SiNextdotjs className="size-9" />,
    },
    {
      name: <SiLaravel className="size-9" />,
    },
    {
      name: <SiInertia className="size-9" />,
    },
    {
      name: <SiNodedotjs className="size-9" />,
    },
    {
      name: <SiExpress className="size-9" />,
    },
    {
      name: <SiTailwindcss className="size-9" />,
    },
    {
      name: <SiMysql className="size-9" />,
    },
    {
      name: <SiMongodb className="size-9" />,
    },
    {
      name: <SiAntdesign className="size-9" />,
    },
    {
      name: <SiGit className="size-9" />,
    },
    {
      name: <SiHtml5 className="size-9" />,
    },
    {
      name: <SiCss3 className="size-9" />,
    },
    {
      name: <SiJavascript className="size-9" />,
    },
    {
      name: <SiTypescript className="size-9" />,
    },
    {
      name: <SiPhp className="size-9" />,
    },
    {
      name: <SiDocker className="size-9" />,
    },
    {
      name: <SiCpanel className="size-9" />,
    },
    {
      name: <SiCapacitor className="size-9" />,
    },
    {
      name: <SiLaragon className="size-9" />,
    },
    {
      name: <SiVisualstudiocode className="size-9" />,
    },
    {
      name: <SiPostman className="size-9" />,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <section className="">
        <div className="mx-auto mt-5 flex flex-col gap-10">
          <p className="w-auto text-5xl font-bold">Who am I .....?</p>
          <div className="max-w-3xl flex-1 leading-relaxed">
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
            as react framework in frontend and{" "}
            <Badge variant="outline" className="gap-1">
              <Link href="https://laravel.com/" target="_blank" className="flex items-center gap-1">
                <SiLaravel />
                Laravel
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

      <div className="grid grid-cols-1 divide-y divide-dashed border border-dashed md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="flex h-full flex-col p-5">
          <div className="">
            <div className="flex items-center justify-between text-lg font-bold">IT Developer</div>
            <p>PT OS Selnajaya Indonesia</p>
          </div>
          <div className="mt-5 flex grow flex-wrap items-center justify-between">
            <Badge>Recent Experience</Badge>
            <Link href="/experiences" className="flex justify-end hover:underline">
              Other Experiences
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="">
            <div className="flex items-center justify-between text-lg font-bold">Payroll Department ES</div>
            <p>This website is aimed at the ES department to manage their clients' payroll</p>
          </div>
          <div className="mt-5 flex grow flex-wrap items-center justify-between">
            <Badge>Recent Projects</Badge>
            <Link href="/projects" className="flex justify-end hover:underline">
              Other Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <Marquee pauseOnHover gradient gradientWidth={50}>
          {icons.map((icon, i) => (
            <div key={i} className="ml-5 flex h-20 w-40 items-center justify-center rounded-lg border border-dashed">
              {icon.name}
            </div>
          ))}
        </Marquee>

        <Marquee className="mt-5" direction="right" pauseOnHover gradient gradientWidth={50}>
          {icons.map((icon, i) => (
            <div key={i} className="ml-5 flex h-20 w-40 items-center justify-center rounded-lg border border-dashed">
              {icon.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

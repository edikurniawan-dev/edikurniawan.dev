import React from "react";
import Link from "next/link";
import {
  SiAntdesign,
  SiBootstrap,
  SiCapacitor,
  SiCss3,
  SiDaisyui,
  SiElementor,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiInertia,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiMapbox,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata = {
  title: "Projects",
  description:
    "Some of the projects I have worked on throughout my career in web development can be found on this page. Each project showcases my dedication to creating innovative and functional solutions, as well as my commitment to continuous learning and growth in this field.",
};

export default function Projects() {
  const projects = [
    {
      title: "Dashboard Admin Jaramba",
      content:
        "Dashboard Admin Jaramba is application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history.",
      link: null,
      techStacks: [
        {
          name: "HTML",
          icon: <SiHtml5 />,
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          icon: <SiCss3 />,
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://getbootstrap.com/",
        },
        {
          name: "Javascript",
          icon: <SiJavascript />,
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
      ],
    },
    {
      title: "PPDB SMA Perintis 2",
      content: "PPDB SMA Perintis 2 is web appllication to handle the registration of new student.",
      link: "https://ppdbsmaperintis2.id/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "Livewire",
          icon: <SiLivewire />,
          link: "https://livewire.laravel.com/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://getbootstrap.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
    {
      title: "Simtaru Lampura",
      content:
        "Simtaru Lampura is a web application to handle the registration of building permits in the North Lampung district.",
      link: "https://simtaru.lampungutarakab.go.id/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "Livewire",
          icon: <SiLivewire />,
          link: "https://livewire.laravel.com/",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
    {
      title: "Laravel Stisla",
      content:
        "Laravel Stisla is an admin dashboard template generated from https://demo.getstisla.com/. Stisla it self is a Free Bootstrap Admin Template which will help you to speed up your project and design your own dashboard UI.",
      link: "https://github.com/edikurniawan-dev/laravel-stisla",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://getbootstrap.com/",
        },
      ],
    },
    {
      title: "IVS Member",
      content:
        "The IVS Member website is dedicated to managing Indonesian Vegan Society (IVS) members and everything in the IVS Member application on the Playstore.",
      link: "https://www.ivsmember.com/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "Livewire",
          icon: <SiLivewire />,
          link: "https://livewire.laravel.com/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://getbootstrap.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
    {
      title: "Kuda Mas Lestari",
      content: "Company web profile for PT Kuda Mas Lestari",
      link: "https://kudamas.id/id/",
      techStacks: [
        {
          name: "Wordpress",
          icon: <SiWordpress />,
          link: "https://wordpress.com/",
        },
        {
          name: "Elementor",
          icon: <SiElementor />,
          link: "https://elementor.com/",
        },
      ],
    },

    {
      title: "Indonesia AI Innovation Challenge 2023",
      content:
        "Indonesia AI Innovation Challenge, AiNOC or Indonesia AI Innovation Challenge 2023 is a challenge to develop and demonstate how human can collaborate with Artificial Intelligence (AI) technologies to overcome challenges and problems as the most recent innovation progression.",
      link: "https://aichallenge-indonesia.id/",
      techStacks: [
        {
          name: "NextJS",
          icon: <SiNextdotjs />,
          link: "https://nextjs.org/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
      ],
    },
    {
      title: "Monitoring Solar Panel",
      content:
        "The PV Monitoring System by SOLARION application is a solution designed to help users efficiently monitor and manage their solar panel systems created by PT Solarion Energi Alam. The main goal of this app is to help users monitor and optimize their solar panel systems. This includes providing updates on system performance, enabling users to monitor electricity production in real-time, and providing suggestions for improvements.",
      link: "https://monitoring.solarion.co/",
      techStacks: [
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://ant.design/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "Framer Motion",
          icon: <SiFramer />,
          link: "https://www.framer.com/motion/",
        },
        {
          name: "Mapbox",
          icon: <SiMapbox />,
          link: "https://www.mapbox.com/",
        },
        {
          name: "ExpressJS",
          icon: <SiExpress />,
          link: "https://expressjs.com/",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          link: "https://www.mongodb.com/",
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
          link: "https://mongoosejs.com/",
        },
      ],
    },
    {
      title: "Monitoring Solar Panel (Mobile)",
      content:
        "The PV Monitoring System by SOLARION application is a solution designed to help users efficiently monitor and manage their solar panel systems created by PT Solarion Energi Alam. The main goal of this app is to help users monitor and optimize their solar panel systems. This includes providing updates on system performance, enabling users to monitor electricity production in real-time, and providing suggestions for improvements.",
      link: "https://play.google.com/store/apps/details?id=com.solarion.pvmonitoringsystem&hl=en_US",
      techStacks: [
        {
          name: "Capacitor",
          icon: <SiCapacitor />,
          link: "https://capacitorjs.com/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://ant.design/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "Framer Motion",
          icon: <SiFramer />,
          link: "https://www.framer.com/motion/",
        },
        {
          name: "Mapbox",
          icon: <SiMapbox />,
          link: "https://www.mapbox.com/",
        },
        {
          name: "ExpressJS",
          icon: <SiExpress />,
          link: "https://expressjs.com/",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          link: "https://www.mongodb.com/",
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
          link: "https://mongoosejs.com/",
        },
      ],
    },
    {
      title: "Notes App",
      content: "Final submission in the 'Belajar Fundamental Aplikasi Web dengan React' class at Dicoding",
      link: "https://notes-app.edikurniawan.dev/",
      techStacks: [
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "DaisyUI",
          icon: <SiDaisyui />,
          link: "https://daisyui.com/",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
      ],
    },
    {
      title: "Forum App",
      content: "Final submission in the 'Menjadi React Web Developer Expert' class at Dicoding",
      link: "https://forum-app.edikurniawan.dev/",
      techStacks: [
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "Redux",
          icon: <SiRedux />,
          link: "https://redux.js.org/",
        },
      ],
    },
    {
      title: "Payroll Department ES",
      content: "This website is aimed at the ES department to manage their clients payroll",
      link: "https://esd-payroll.os-selnajaya.com/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "InertiaJS",
          icon: <SiInertia />,
          link: "https://inertiajs.com/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://ant.design/",
        },
        {
          name: "TaiwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
    {
      title: "Payroll Department TS",
      content: "This website is aimed at the TS department to manage their clients payroll",
      link: "https://ts-payroll.os-selnajaya.com/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "InertiaJS",
          icon: <SiInertia />,
          link: "https://inertiajs.com/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://ant.design/",
        },
        {
          name: "TaiwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
    {
      title: "SOJP OS Selnajaya",
      content:
        "The website is a platform managed by OS Selnajaya, an organization in Indonesia specializing in human resource management for the Technical Intern Training program and the Specified Skilled Worker program in Japan.",
      link: "https://sojp.os-selnajaya.com/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://laravel.com/",
        },
        {
          name: "InertiaJS",
          icon: <SiInertia />,
          link: "https://inertiajs.com/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://ant.design/",
        },
        {
          name: "TaiwindCSS",
          icon: <SiTailwindcss />,
          link: "https://tailwindcss.com/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://www.mysql.com/",
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>

      <p className="mt-5">
        Some of the projects I have worked on throughout my career in web development can be found on this page. Each
        project showcases my dedication to creating innovative and functional solutions, as well as my commitment to
        continuous learning and growth in this field.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.reverse().map((project, i) => (
          <div key={i} className="relative flex flex-col rounded-md border border-dashed p-6 sm:p-8">
            <div className="grow">
              <div className="text-lg font-bold">{project.title}</div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="mt-2 line-clamp-3">{project.content}</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-96">{project.content}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="mt-5 flex flex-wrap gap-1">
                {project.techStacks.map((tech, j) => (
                  <a
                    key={j}
                    href={tech.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`${badgeVariants({ variant: "outline" })} flex items-center gap-1`}
                  >
                    {tech.icon}
                    {tech.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-7 flex">
              {project.link ? (
                <Link href={project.link} target="_blank">
                  <Button size="sm">View Project</Button>
                </Link>
              ) : (
                <Button disabled size="sm">
                  View Project
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

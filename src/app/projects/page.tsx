import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SiAntdesign,
  SiBootstrap,
  SiCapacitor,
  SiCss3,
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
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { text } from "stream/consumers";

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
          link: "https://react.dev/",
        },
        {
          name: "CSS",
          icon: <SiCss3 />,
          link: "https://react.dev/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://react.dev/",
        },
        {
          name: "Javascript",
          icon: <SiJavascript />,
          link: "https://react.dev/",
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
          link: "https://react.dev/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://react.dev/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://react.dev/",
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
          link: "https://react.dev/",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          link: "https://react.dev/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://react.dev/",
        },
      ],
    },
    {
      title: "IVS Member",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
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
          link: "https://react.dev/",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          link: "https://react.dev/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://react.dev/",
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
          link: "https://react.dev/",
        },
        {
          name: "Eleementor",
          icon: <SiElementor />,
          link: "https://react.dev/",
        },
      ],
    },
    {
      title: "Indonesia AI Innovation Challenge 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
      link: "https://aichallenge-indonesia.id/",
      techStacks: [
        {
          name: "NextJS",
          icon: <SiNextdotjs />,
          link: "https://react.dev/",
        },
        {
          name: "React",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://react.dev/",
        },
      ],
    },
    {
      title: "Monitoring Solar Panel",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
      link: "https://monitoring.solarion.co/",
      techStacks: [
        {
          name: "React",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://react.dev/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://react.dev/",
        },
        {
          name: "Framer Motion",
          icon: <SiFramer />,
          link: "https://react.dev/",
        },
        {
          name: "Mapbox",
          icon: <SiMapbox />,
          link: "https://react.dev/",
        },
        {
          name: "ExpressJS",
          icon: <SiExpress />,
          link: "https://react.dev/",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          link: "https://react.dev/",
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
          link: "https://react.dev/",
        },
      ],
    },
    {
      title: "Monitoring Solar Panel (Mobile)",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
      link: "https://play.google.com/store/apps/details?id=com.solarion.pvmonitoringsystem&hl=en_US",
      techStacks: [
        {
          name: "Capacitor",
          icon: <SiCapacitor />,
          link: "https://react.dev/",
        },
        {
          name: "React",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://react.dev/",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          link: "https://react.dev/",
        },
        {
          name: "Framer Motion",
          icon: <SiFramer />,
          link: "https://react.dev/",
        },
        {
          name: "Mapbox",
          icon: <SiMapbox />,
          link: "https://react.dev/",
        },
        {
          name: "ExpressJS",
          icon: <SiExpress />,
          link: "https://react.dev/",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          link: "https://react.dev/",
        },
        {
          name: "Mongoose",
          icon: <SiMongoose />,
          link: "https://react.dev/",
        },
      ],
    },
    {
      title: "Payroll Department ES",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
      link: "https://esd-payroll.os-selnajaya.com/",
      techStacks: [
        {
          name: "Laravel",
          icon: <SiLaravel />,
          link: "https://react.dev/",
        },
        {
          name: "InertiaJS",
          icon: <SiInertia />,
          link: "https://react.dev/",
        },
        {
          name: "ReactJS",
          icon: <SiReact />,
          link: "https://react.dev/",
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign />,
          link: "https://react.dev/",
        },
        {
          name: "TaiwindCSS",
          icon: <SiTailwindcss />,
          link: "https://react.dev/",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          link: "https://react.dev/",
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

      <div className="mt-5 grid grid-cols-2 gap-5">
        {projects.reverse().map((project, i) => (
          <div key={i} className="flex flex-col rounded-md border border-dashed p-6 sm:p-8">
            <div className="grow">
              <div className="text-lg font-bold">{project.title}</div>

              <p className="mt-2">{project.content}</p>

              <div className="mt-5 flex flex-wrap gap-1">
                {project.techStacks.map((tech, j) => (
                  <Link
                    key={j}
                    href={tech.link}
                    className={`${badgeVariants({ variant: "outline" })} flex items-center gap-1`}
                  >
                    {tech.icon}
                    {tech.name}
                  </Link>
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

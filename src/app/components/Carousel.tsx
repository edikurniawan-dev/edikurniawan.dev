import React from "react";
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

export default function Carousel() {
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
    <>
      <div className="group mt-10 flex space-x-5 overflow-hidden">
        <div className="group-hover:paused flex animate-loop-scroll space-x-5">
          {icons.map((icon, i) => (
            <div key={i} className="flex h-20 w-40 items-center justify-center rounded-lg border hover:shadow-lg">
              {icon.name}
            </div>
          ))}
        </div>
        <div className="group-hover:paused flex animate-loop-scroll space-x-5" aria-hidden="true">
          {icons.map((icon, i) => (
            <div key={i} className="flex h-20 w-40 items-center justify-center rounded-lg border">
              {icon.name}
            </div>
          ))}
        </div>
      </div>
      <div className="group mt-10 flex space-x-5 overflow-hidden">
        <div className="group-hover:paused flex animate-loop-scroll2 space-x-5">
          {icons
            .map((icon, i) => (
              <div key={i} className="flex h-20 w-40 items-center justify-center rounded-lg border">
                {icon.name}
              </div>
            ))
            .reverse()}
        </div>
        <div className="group-hover:paused flex animate-loop-scroll2 space-x-5" aria-hidden="true">
          {icons
            .map((icon, i) => (
              <div key={i} className="flex h-20 w-40 items-center justify-center rounded-lg border">
                {icon.name}
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
}

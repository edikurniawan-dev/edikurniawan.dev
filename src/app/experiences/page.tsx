import React from "react";
import ExperienceCard from "./components/experience-card";

export const metadata = {
  title: "Experience",
  description:
    "The Experience page summarizes my professional journey as a web developer. With over 2 years of experience, I have worked with various technologies such as JavaScript, React, Next.js, Laravel, and Node.js. Each role I have held provides insights into my contributions to previous projects, as well as the skills and achievements I have attained. Explore further to see how my experience can add value to your projects.",
};

export default function Experience() {
  const experiences = [
    {
      id: 1,
      position: "Front-End Web Developer (Intern)",
      companyName: "PT Banopolis Inovasi Kendara",
      companyWebsite: null,
      companyLinkedin: "https://www.linkedin.com/company/banopolis-inovasi-kendara/",
      duration: ["2020-06", "2020-07"],
      taskDesc:
        "Develop UI website dashboard admin of Jaramba apps. I develope using figma, bootstrap, and sweetalert. This application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history.",
    },
    {
      id: 2,
      position: "Full-Stack Web Developer",
      companyName: "CV Newus Teknologi",
      companyWebsite: null,
      companyLinkedin: "https://www.linkedin.com/company/newustechnology/",
      duration: ["2021-11", "2022-03"],
      taskDesc:
        "Develop websites both frontend and backend according to client needs. Some of the websites that I have created are Sistem Informasi Tata Ruang Lampung Utara (Simtaru Lampura), PPDB SMA Perintis 2 and fix bug website SOP Kabupaten Mahakam Ulu.",
    },
    {
      id: 3,
      position: "React Developer Fasilitator",
      companyName: "Dicoding Indonesia",
      companyWebsite: "https://www.dicoding.com/",
      companyLinkedin: "https://www.linkedin.com/company/dicoding/",
      duration: ["2022-08", "2023-01"],
      taskDesc:
        "Become a fasilitator or mentor for scholarship participants at intermediate and expert level react developer from IDCamp Dicoding",
    },
    {
      id: 4,
      position: "Full-Stack Developer",
      companyName: "PT Solarion Energi Alam",
      companyWebsite: "https://solarion.co/",
      companyLinkedin: "https://www.linkedin.com/company/solarion-energi-alam/",
      duration: ["2022-07", "2023-12"],
      taskDesc: "Build and develop apps to monitoring solar panel named PV Monitoring System by SOLARION",
    },
    {
      id: 5,
      position: "React Developer Fasilitator",
      companyName: "Dicoding Indonesia",
      companyWebsite: "https://www.dicoding.com/",
      companyLinkedin: "https://www.linkedin.com/company/dicoding/",
      duration: ["2023-12", "2024-03"],
      taskDesc:
        "Become a fasilitator or mentor for scholarship participants at intermediate level react developer from IDCamp Dicoding",
    },
    {
      id: 6,
      position: "IT Developer",
      companyName: "PT OS Selnajaya Indonesia",
      companyWebsite: "https://www.linkedin.com/company/os-selnajaya-indonesia/",
      companyLinkedin: "https://www.os-selnajaya.com/",
      duration: ["2024-01", "now"],
      taskDesc: "Develop web apps for internal company",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold">Experiences</h1>

      <p className="mt-5">
        The Experience page summarizes my professional journey as a web developer. With over 2 years of experience, I
        have worked with various technologies such as JavaScript, React, Next.js, Laravel, and Node.js. Each role I have
        held provides insights into my contributions to previous projects, as well as the skills and achievements I have
        attained. Explore further to see how my experience can add value to your projects.
      </p>

      <div className="mt-5">
        <div className="relative space-y-16 md:space-y-0">
          {/* vertical line */}
          <div className="absolute left-1/2 hidden h-full -translate-x-1/2 transform border-l border-dashed md:block" />
          {experiences.reverse().map((experience, i) => (
            <ExperienceCard
              key={experience.id}
              number={experiences.length - i}
              position={experience.position}
              companyName={experience.companyName}
              companyWebsite={experience.companyWebsite}
              companyLinkedin={experience.companyLinkedin}
              duration={experience.duration}
              taskDesc={experience.taskDesc}
              place={(i + 1) % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

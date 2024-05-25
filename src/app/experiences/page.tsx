import ExperienceCard from "./components/experience-card";

export default function page() {
  const experiences = [
    {
      position: "Front-End Web Developer (Intern)",
      companyName: "PT Banopolis Inovasi Kendara",
      companyWebsite: null,
      companyLinkedin: "https://www.linkedin.com/company/banopolis-inovasi-kendara/",
      duration: [1590944400000, 1593536400000],
      taskDesc:
        "Develop UI website dashboard admin of Jaramba apps. I develope using figma, bootstrap, and sweetalert. This application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history.",
    },
    {
      position: "Full-Stack Web Developer",
      companyName: "CV Newus Teknologi",
      companyWebsite: null,
      companyLinkedin: "https://www.linkedin.com/company/newustechnology/",
      duration: [1635699600000, 1646067600000],
      taskDesc:
        "Develop websites both frontend and backend according to client needs. Some of the websites that I have created are Sistem Informasi Tata Ruang Lampung Utara (Simtaru Lampura), PPDB SMA Perintis 2 and fix bug website SOP Kabupaten Mahakam Ulu.",
    },
    {
      position: "React Developer Fasilitator",
      companyName: "Dicoding Indonesia",
      companyWebsite: "https://www.dicoding.com/",
      companyLinkedin: "https://www.linkedin.com/company/dicoding/",
      duration: [1659286800000, 1672506000000],
      taskDesc:
        "Become a fasilitator or mentor for scholarship participants at intermediate and expert level react developer from IDCamp Dicoding",
    },
    {
      position: "Full-Stack Developer",
      companyName: "PT Solarion Energi Alam",
      companyWebsite: "https://solarion.co/",
      companyLinkedin: "https://www.linkedin.com/company/solarion-energi-alam/",
      duration: [1656608400000, 1701363600000],
      taskDesc: "Build and develop apps to monitoring solar panel named PV Monitoring System by SOLARION",
    },
    {
      position: "React Developer Fasilitator",
      companyName: "Dicoding Indonesia",
      companyWebsite: "https://www.dicoding.com/",
      companyLinkedin: "https://www.linkedin.com/company/dicoding/",
      duration: [1701363600000, 1709226000000],
      taskDesc:
        "Become a fasilitator or mentor for scholarship participants at intermediate level react developer from IDCamp Dicoding",
    },
    {
      position: "IT Developer",
      companyName: "PT OS Selnajaya Indonesia",
      companyWebsite: "https://www.linkedin.com/company/os-selnajaya-indonesia/",
      companyLinkedin: "https://www.os-selnajaya.com/",
      duration: [1704042000000, 0],
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
        <div className="relative space-y-16 lg:space-y-0">
          {/* vertical line */}
          <div className="absolute left-1/2 hidden h-full -translate-x-1/2 transform border-l border-dashed lg:block"></div>
          {experiences.reverse().map((experience, i) => (
            <ExperienceCard
              key={i}
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

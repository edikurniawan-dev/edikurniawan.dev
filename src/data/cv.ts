export interface CV {
	name: string;
	title: string;
	location: string;
	locationLink: string;
	about: string;
	summary: string;
	contact: Contact;
	work: Work[];
	education: Education[];
	skills: string[];
}

export interface Contact {
	email: string;
	social: Social[];
}

export interface Social {
	name: string;
	url: string;
}

export interface Work {
	company: string;
	link: string;
	title: string;
	start: string;
	end: string | null;
	description: string;
	achievements?: string[];
	badges?: string[];
}

export interface Education {
	school: string;
	degree: string;
	start: string;
	end: string | null;
}

export const CV_DATA: CV = {
	name: "Edi Kurniawan",
	title: "Software Engineer (Web Platforms)",
	location: "Jakarta, Indonesia",
	locationLink: "https://www.google.com/maps/place/Jakarta",
	about: "I am a passionate software engineer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.",
	summary: "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Full Stack Development, Web Applications, and Database Management. Strong engineering professional with a Bachelor's degree focused in Informatics Engineering from Institut Teknologi Sumatera (ITERA).",
	contact: {
		email: "contact@edikurniawan.dev",
		social: [
			{ name: "GitHub", url: "https://github.com/edikurniawan-dev" },
			{ name: "LinkedIn", url: "https://linkedin.com/in/edikurniawan-dev" },
		],
	},
	work: [
		{
			company: "BREXA Raya Indonesia",
			link: "https://www.linkedin.com/company/pt-brexa-indonesia",
			title: "Leader System and Development",
			start: "Oct 2025",
			end: "Present",
			description: "Manage internal applications and development team.",
			achievements: [],
			badges: [
				"Laravel",
				"PHP",
				"JavaScript",
				"React",
				"mySQL",
				"Ant Design",
			],
		},
		{
			company: "OS Selnajaya Indonesia",
			link: "https://www.linkedin.com/company/os-selnajaya-indonesia",
			title: "IT Developer",
			start: "Jan 2024",
			end: "Oct 2025",
			description: "Manage internal applications and development team.",
			achievements: [],
			badges: [
				"Laravel",
				"PHP",
				"JavaScript",
				"React",
				"mySQL",
				"Ant Design",
			],
		},
		{
			company: "Dicoding Indonesia",
			link: "https://www.linkedin.com/company/dicoding",
			title: "React Developer Fasilitator Intermediate Level - IDCamp Dicoding",
			start: "Dec 2023",
			end: "Mar 2024",
			description: "Become a fasilitator or mentor for scholarship participants at intermediate level react developer from IDCamp Dicoding.",
			achievements: [],
			badges: [
				"JavaScript",
				"React",
			],
		},
		{
			company: "Solarion Energi Alam",
			link: "https://www.linkedin.com/company/solarion-energi-alam",
			title: "Full Stack Developer",
			start: "Jul 2022",
			end: "Dec 2023",
			description: "Build and develop apps to monitoring solar panel named PV Monitoring System by SOLARION",
			achievements: [],
			badges: [
				"Laravel",
				"PHP",
				"JavaScript",
				"React",
				"Next.js",
				"Tailwind CSS",
				"MongoDB",
				"Capacitor",
			],
		},
		{
			company: "Dicoding Indonesia",
			link: "https://www.linkedin.com/company/dicoding",
			title: "React Developer Fasilitator Intermediate and Expert Level - IDCamp Dicoding",
			start: "Aug 2022",
			end: "Jan 2023",
			description: "Become a fasilitator or mentor for scholarship participants at intermediate and expert level react developer from IDCamp Dicoding",
			achievements: [],
			badges: [
				"JavaScript",
				"React",
				"Next.js",
				"Redux",
			],
		},
		{
			company: "Newus Technology",
			link: "https://www.linkedin.com/company/newustechnology",
			title: "Full Stack Web Developer",
			start: "December 2017",
			end: "July 2021",
			description: "Develop websites both frontend and backend according to client needs. Some of the websites that I have created are Sistem Informasi Tata Ruang Lampung Utara (Simtaru Lampura), PPDB SMA Perintis 2 and fix bug website SOP Kabupaten Mahakam Ulu.",
			achievements: [],
			badges: [
				"Laravel",
				"PHP",
				"JavaScript",
				"Livewire",
				"Alpine.js",
				"Tailwind CSS",
				"mySQL",
				"Bootstrap",
			],
		},
		{
			company: "Banopolis Inovasi Kendara",
			link: "https://www.linkedin.com/company/banopolis-inovasi-kendara",
			title: "FrontEnd Web Developer Intern",
			start: "Jun 2020",
			end: "Nov 2020",
			description: "Develop UI website dashboard admin of Jaramba apps. I develope using figma, bootstrap, and sweetalert. This application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history.",
			achievements: [],
			badges: [
				"HTML",
				"CSS",
				"JavaScript",
				"Bootstrap",
				"SweetAlert",
			],
		},
	],
	education: [
		{
			school: "Institut Teknologi Sumatera (ITERA)",
			degree: "Bachelor's degree, Informatics Engineering",
			start: "2017",
			end: "2021",
		},
	],
	skills: [
		"Laravel",
		"PHP",
		"JavaScript",
		"TypeScript",
		"Vue.js",
		"React",
		"Node.js",
		"SQL",
		"NoSQL",
		"GraphQL",
		"Docker",
		"AWS",
		"Git",
		"CI/CD",
		"MongoDB",
		"mySQL",
		"PostgreSQL",
		"Tailwind CSS",
		"Bootstrap",
	],
};

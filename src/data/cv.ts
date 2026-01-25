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
	about:
		"Experienced Software Engineer specializing in Java and Spring Boot for building robust web applications and backend services.",
	summary: `Passionate Software Engineer with 6+ years of experience in designing, developing, and maintaining web applications and backend services.
        Proficient in Java and Spring Boot, with a strong background in building scalable microservices and RESTful APIs.
        Adept at working in agile teams to deliver high-quality software solutions that meet business needs.`,
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
			link: "https://www.linkedin.com/company/brexa-raya-indonesia/",
			title: "Leader System and Development",
			start: "Oct 2025",
			end: "Present",
			description: "",
			achievements: [],
			badges: [
				"Java 21",
				"Spring Boot",
				"Kafka",
				"Redis",
				"PostgreSQL",
				"Liquibase",
				"JUnit",
				"Mockito",
				"Testcontainers",
				"AWS",
				"Docker",
				"REST",
				"OpenAPI",
				"Grafana",
				"OpenSearch",
				"k6",
			],
		},
		{
			company: "OS Selnajaya Indonesia",
			link: "https://www.linkedin.com/company/catco-tech",
			title: "Full Stack Engineer",
			start: "December 2022",
			end: "April 2024",
			description:
				"Contributed to the development of a high-intensity, B2B gambling platform built on a microservice architecture.",
			achievements: [
				"Developed and maintained scalable backend microservices using Java 11 and Spring Boot to support core gaming and business logic.",
				"Engineered high-performance data solutions using Apache Ignite / GridGain as an In-Memory Data Platform",
				"Built real-time, interactive features for live gaming events by implementing WebSockets with the STOMP protocol.",
				"Designed and implemented RESTful APIs to facilitate seamless integration with third-party gaming services and internal clients.",
			],
			badges: [
				"Java 11",
				"Spring Boot",
				"WebSockets",
				"STOMP",
				"GridGain",
				"Apache Ignite",
				"Angular",
				"TypeScript",
				"AWS",
				"Docker",
			],
		},
		{
			company: "Dicoding Indonesia",
			link: "https://www.linkedin.com/company/effectivesoft",
			title: "Java Software Engineer",
			start: "August 2021",
			end: "November 2022",
			description: `Developed solutions for diverse projects, including a healthcare cloud-sync feature, a GIS 
                visualization platform, and an internal automation tool.`,
			achievements: [
				"Built and maintained backend services for enterprise web apps using Java and Spring.",
				"Implemented cloud-native features using AWS services like Lambda, S3, IoT and KMS.",
				"Managed relational (PostgreSQL, MySQL, SQLite) and NoSQL (DynamoDB) databases, using Liquibase for schema evolution.",
				"Ensured application quality with comprehensive unit and integration testing using JUnit, Spock, and Testcontainers.",
			],
			badges: [
				"Java 11",
				"Spring Boot",
				"AWS",
				"PostgreSQL",
				"SQLite",
				"JUnit",
				"Spock",
				"Testcontainers",
			],
		},
		{
			company: "Solarion Energi Alam",
			link: "https://www.linkedin.com/company/iba-group",
			title: "Java Software Engineer",
			start: "December 2017",
			end: "July 2021",
			description:
				"Developed and maintained a full-stack enterprise billing and subscriber management system within the telecommunications industry.",
			achievements: [
				"Engineered and implemented RESTful APIs and backend business logic using a Java EE stack, including EJB, JAX-RS, and Hibernate",
				"Built and enhanced responsive, user interfaces using modern frameworks like Angular and component libraries such as Primefaces.",
			],
			badges: [
				"Java 8",
				"EJB",
				"JAX-RS",
				"Hibernate",
				"Maven",
				"Wildfly",
				"Jaspersoft",
				"Oracle",
				"Angular",
				"Primefaces",
				"UIkit",
			],
		},
		{
			company: "Dicoding Indonesia",
			link: "https://www.linkedin.com/company/iba-group",
			title: "Java Software Engineer",
			start: "December 2017",
			end: "July 2021",
			description:
				"Developed and maintained a full-stack enterprise billing and subscriber management system within the telecommunications industry.",
			achievements: [
				"Engineered and implemented RESTful APIs and backend business logic using a Java EE stack, including EJB, JAX-RS, and Hibernate",
				"Built and enhanced responsive, user interfaces using modern frameworks like Angular and component libraries such as Primefaces.",
			],
			badges: [
				"Java 8",
				"EJB",
				"JAX-RS",
				"Hibernate",
				"Maven",
				"Wildfly",
				"Jaspersoft",
				"Oracle",
				"Angular",
				"Primefaces",
				"UIkit",
			],
		},
		{
			company: "Newus Teknologi",
			link: "https://www.linkedin.com/company/iba-group",
			title: "Java Software Engineer",
			start: "December 2017",
			end: "July 2021",
			description:
				"Developed and maintained a full-stack enterprise billing and subscriber management system within the telecommunications industry.",
			achievements: [
				"Engineered and implemented RESTful APIs and backend business logic using a Java EE stack, including EJB, JAX-RS, and Hibernate",
				"Built and enhanced responsive, user interfaces using modern frameworks like Angular and component libraries such as Primefaces.",
			],
			badges: [
				"Java 8",
				"EJB",
				"JAX-RS",
				"Hibernate",
				"Maven",
				"Wildfly",
				"Jaspersoft",
				"Oracle",
				"Angular",
				"Primefaces",
				"UIkit",
			],
		},
		{
			company: "Banopolis Inovasi Kendara",
			link: "https://www.linkedin.com/company/iba-group",
			title: "Java Software Engineer",
			start: "December 2017",
			end: "July 2021",
			description:
				"Developed and maintained a full-stack enterprise billing and subscriber management system within the telecommunications industry.",
			achievements: [
				"Engineered and implemented RESTful APIs and backend business logic using a Java EE stack, including EJB, JAX-RS, and Hibernate",
				"Built and enhanced responsive, user interfaces using modern frameworks like Angular and component libraries such as Primefaces.",
			],
			badges: [
				"Java 8",
				"EJB",
				"JAX-RS",
				"Hibernate",
				"Maven",
				"Wildfly",
				"Jaspersoft",
				"Oracle",
				"Angular",
				"Primefaces",
				"UIkit",
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
	],
};

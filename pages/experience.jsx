import Link from 'next/link';
import Layout from '../components/layout';
import ExperienceCard from '../components/experiencecard';

export default function Experience() {
    return (
        <Layout title="Experience | Edi Kurniawan">
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Experience
            </h1>
            <br />

            <div className="flex flex-col justify-center h-full -mt-10 md:-mt-0">
                <div className="w-full px-0 py-0 lg:py-3 sm:mx-auto">
                    <div className="relative space-y-16 text-gray-700 lg:space-y-0">
                        {/* line vertical */}
                        <div className="absolute hidden w-1 h-full transform -translate-x-1/2 opacity-50 lg:block bg-dark dark:bg-light left-1/2"></div>
                        <ExperienceCard
                            place="flex justify-end w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pl-20"
                            companyName="PT Solarion Energi Alam"
                            during="Full-Stack Developer | July 2022 - Present"
                            task="Develop PV Monitoring System apps to monitoring solar panel"
                            number="4"
                        />
                        <ExperienceCard
                            place="flex justify-start w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pr-20"
                            companyName="Dicoding Indonesia"
                            during="React Developer Fasilitator | August 2022 - January 2023"
                            task="Guiding IDCamp scholarship participants in the reactjs developer class"
                            number="3"
                        />
                        <ExperienceCard
                            place="flex justify-end w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pl-20"
                            companyName="CV Newus Teknologi"
                            during="Full-Stack Web Developer | November 2021 - March 2022"
                            task="Develop websites both frontend and backend according to client needs. Some of the websites that I have created are Sistem Informasi Tata Ruang Lampung Utara (Simtaru Lampura), PPDB SMA Perintis 2 and fix bug website SOP Kabupaten Mahakam Ulu."
                            number="2"
                        />
                        <ExperienceCard
                            place="flex justify-start w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pr-20"
                            companyName="PT Banopolis Inovasi Kendara (Intern)"
                            during="Front-End Web Developer | June 2020 - July 2020"
                            task="Develop UI website dashboard admin of Jaramba apps. I develope using figma, bootstrap, and sweetalert. This application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history."
                            number="1"
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <hr className="block md:hidden" />
                    <div className="mt-8 text-center">
                        <Link href="/resume">
                            <a className="download-resume">View Resume</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

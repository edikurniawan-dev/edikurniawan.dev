import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl md:text-3xl text-dark dark:text-light font-bold underline">
                Experience
            </h1>
            <br />

            <div className="-mt-10 md:-mt-0 h-full flex flex-col justify-center">
                <div className="py-0 lg:py-3 sm:mx-auto w-full px-0 lg:px-2">
                    <div className="relative text-gray-700 space-y-16 lg:space-y-0">
                        {/* line vertical */}
                        <div className="hidden lg:block w-1 bg-dark dark:bg-light opacity-50 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                        <ExperienceCard
                            place="flex justify-start w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pr-20"
                            companyName="PT Banopolis Inovasi Kendara (Intern)"
                            during="Front-End Web Developer | June 2020 - July 2020"
                            task="Develop UI website dashboard admin of Jaramba apps. I develope using figma, bootstrap, and sweetalert. This application serves to monitor the location of the bus that is running. In addition to storing route data, drivers, buses and bus travel history."
                            number="1"
                        />
                        <ExperienceCard
                            place="flex justify-end w-full mx-auto items-center"
                            padding="w-full lg:w-1/2 lg:pl-20"
                            companyName="Freeleance"
                            during="Web Developer | June 2020 - Present"
                            task="Develop a website according to the client's request."
                            number="2"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Experience;

import React from 'react';
import Jaramba from '../images/portfolio/jaramba.png';
import PeduliPanti from '../images/portfolio/peduli-panti.png';
import PelitaBersatu from '../images/portfolio/pelitabersatu.png';
import Annazhori from '../images/portfolio/annazhori.png';

const Portfolio = () => {
    return (
        <main className="">
            <h1 className="font-ubuntu text-3xl text-blue-light underline">
                Portfolio
            </h1>
            <br />
            <div className="grid grid-cols-2 gap-14">
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-cover bg-center z-0"></div>
                    <img
                        src={Jaramba}
                        alt=""
                        className="rounded-2xl border-2 shadow-xl"
                    />

                    <div className="bg-gray-900 hover:bg-opacity-80 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white rounded-2xl  text-center">
                        <a href="#0">
                            <h1 className="text-2xl font-hind font-semibold pb-5 hover:underline">
                                Dashboard Admin Jaramba
                            </h1>
                            <p className="px-10">
                                Dashboard Admin Jaramba is application serves to
                                monitor the location of the bus that is running.
                                In addition to storing route data, drivers,
                                buses and bus travel history.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-cover bg-center z-0 "></div>
                    <img
                        src={PeduliPanti}
                        alt=""
                        className="rounded-2xl border-2  shadow-xl"
                    />

                    <div className="bg-gray-900 hover:bg-opacity-80 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white rounded-2xl  text-center">
                        <a href="https://github.com/NurulHakim/pedulipanti">
                            <h1 className="text-2xl font-hind font-semibold pb-5 hover:underline">
                                Peduli Panti
                            </h1>
                            <p className="px-10">
                                Peduli Panti is a website to find orphanages
                                that need help in the form of money, food,
                                clothing and more. This website was built using
                                the Laravel framework and MySQL database.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-cover bg-center z-0 "></div>
                    <img
                        src={PelitaBersatu}
                        alt=""
                        className="rounded-2xl border-2  shadow-xl"
                    />

                    <div className="bg-gray-900 hover:bg-opacity-80 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white rounded-2xl  text-center">
                        <a href="https://pelitabersatu.com/">
                            <h1 className="text-2xl font-hind font-semibold pb-5 hover:underline">
                                Pelita Barsatu
                            </h1>
                            <p className="px-10">
                                Pelita Barsatu is a company website from Pelita
                                Bersatu Indonesia. This websites were build
                                using the Content Management System, namely
                                WordPress and Elementor.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-cover bg-center z-0 "></div>
                    <img
                        src={Annazhori}
                        alt=""
                        className="rounded-2xl border-2  shadow-xl"
                    />

                    <div className="bg-gray-900 hover:bg-opacity-80 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white rounded-2xl  text-center">
                        <a href="https://annazhori.com/">
                            <h1 className="text-2xl font-hind font-semibold pb-5 hover:underline">
                                An-Nazhori
                            </h1>
                            <p className="px-10">
                                An-Nazhori is a company website from Yayasan
                                Pendidikan dan Dakwah Islan An-Nazhori. This
                                websites were build using the Content Management
                                System, namely WordPress and Elementor.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;

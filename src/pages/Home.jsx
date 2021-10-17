import React from 'react';
import Myfoto from '../images/me1.png';

const Home = () => {
    return (
        <main className="pt-5 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex md:hidden justify-center w-full mb-5">
                    <img src={Myfoto} className="w-1/2" alt="" />
                </div>
                <div className="font-mono flex flex-col md:col-span-2 pb-8 md:pb-16 justify-end text-dark md:space-y-5 pr-0 md:pr-20 xl:pr-40">
                    <div className="space-y-0 md:space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">
                            Hello I'm
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Edi Kurniawan
                        </h1>
                        <h1 className="text-xl md:text-2xl font-bold">
                            Web Developer
                        </h1>
                        <p className="text-base md:text-lg font-sans tracking-wider">
                            I am a hard worker with experience as a web
                            developer. I love coding so I study every day to
                            improve my skills regarding web development. My
                            experience is related to web development for about 1
                            year using several technologies to build websites
                            from clients such as React and Laravel.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-6 font-medium text-base md:text-lg pt-5 md:pt-10">
                        <a
                            href="#0"
                            className="text-dark bg-gray py-2 px-5 md:px-8 border-2 border-dark hover:bg-dark hover:text-light">
                            <i className="fas fa-file-download"></i>
                            &nbsp; Resume
                        </a>
                        <a
                            href="#0"
                            className="text-white bg-dark py-2 px-5 md:px-8 border-2 border-dark hover:bg-light hover:text-dark">
                            <i className="fas fa-file-download"></i>
                            &nbsp; Portfolio
                        </a>
                    </div>
                </div>
                <div className="hidden md:block justify-self-end w-full">
                    <img src={Myfoto} className="" alt="" />
                </div>
            </div>
            <div className="space-y-4 flex flex-col items-center">
                <span className="text-base-mg:text-lg font-bold">
                    Connect with me:
                </span>
                <div className="space-x-4">
                    <a
                        href="https://www.linkedin.com/in/edikurniawan-dev/"
                        target="_blank"
                        rel="noreferrer">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="border-2 border-dark  bg-dark text-white hover:bg-light hover:text-dark fab fa-linkedin-in fa-2x"></i>
                    </a>
                    <a
                        href="https://github.com/edikurniawan-dev"
                        target="_blank"
                        rel="noreferrer">
                        <i
                            style={{
                                paddingLeft: '8px',
                                paddingRight: '8px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="border-2 border-dark bg-dark text-white hover:bg-light hover:text-dark fab fa-github fa-2x"></i>
                    </a>
                    <a
                        href="https://twitter.com/edikurnia_dev"
                        target="_blank"
                        rel="noreferrer">
                        <i
                            style={{
                                paddingLeft: '7.5px',
                                paddingRight: '7.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="border-2 border-dark bg-dark text-white hover:bg-light hover:text-dark fab fa-twitter fa-2x"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/edi.kurniawan27/"
                        target="_blank"
                        rel="noreferrer">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="border-2 border-dark bg-dark text-white hover:bg-light hover:text-dark fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Home;

import React from 'react';
import Myfoto from '../images/me1.png';

const Home = () => {
    return (
        <main className="pt-5 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex justify-center w-full mb-8 md:hidden">
                    <img src={Myfoto} className="w-2/3" alt="" />
                </div>
                <div className="flex flex-col justify-end pb-8 pr-0 font-mono md:col-span-2 md:pb-16 text-dark dark:text-light md:space-y-5 md:pr-5 lg:pr-20 xl:pr-40">
                    <div className="space-y-0 md:space-y-4">
                        <h1 className="text-xl font-bold lg:text-2xl">
                            Hello I'm
                        </h1>
                        <h1 className="text-4xl font-bold lg:text-5xl">
                            Edi Kurniawan
                        </h1>
                        <h1 className="text-xl font-bold lg:text-2xl">
                            a Web Developer
                        </h1>
                        <p className="pt-2 font-sans text-base tracking-wider md:pt-0 md:text-lg">
                            I am a hard worker with experience as a web
                            developer. I love coding so I study every day to
                            improve my skills regarding web development. My
                            experience is related to web development for about 1
                            year using several technologies to build websites
                            from clients request.
                        </p>
                    </div>
                    <div className="flex justify-center pt-5 space-x-6 text-base font-medium md:justify-start md:text-lg md:pt-10">
                        <a
                            href="https://drive.google.com/u/2/uc?id=1ZSd_Y9xnBtL_nSUjMmIEePklriAS-Il7&export=download"
                            className="px-4 py-2 text-white border-2 dark:text-dark bg-dark dark:bg-light md:px-8 border-dark dark:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
                            <i className="fas fa-file-download"></i>
                            &nbsp; Resume
                        </a>
                    </div>
                </div>
                <div className="hidden w-full md:block justify-self-end">
                    <img loading="lazy" src={Myfoto} className="" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <span className="font-mono text-base font-bold md:text-lg text-dark dark:text-light">
                    Connect with me:
                </span>
                <div className="space-x-4">
                    <a
                        href="https://www.linkedin.com/in/edikurniawan-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://github.com/edikurniawan-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '8px',
                                paddingRight: '8px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-github"></i>
                    </a>
                    <a
                        href="https://twitter.com/edikurnia_dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '7.5px',
                                paddingRight: '7.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/edi.kurniawan27/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Home;

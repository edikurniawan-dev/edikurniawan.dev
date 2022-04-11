import React from 'react';
import Myfoto from '../images/me1.png';
import SkillCard from '../components/SkillCard';

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

            <h1 className="mt-20 font-mono text-2xl font-bold text-center underline md:text-3xl text-dark dark:text-light">
                Skill
            </h1>
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-7 md:gap-10">
                {/* <SkillCard icon="fab fa-html5" iconName="HTML" /> */}
                {/* <SkillCard icon="fab fa-css3-alt" iconName="CSS" /> */}
                <SkillCard icon="fab fa-js" iconName="Javascript" />
                <SkillCard icon="fab fa-react" iconName="ReactJS" />
                <SkillCard icon="fab fa-node-js" iconName="NodeJS" />
                <SkillCard icon="fab fa-laravel" iconName="Laravel" />
                {/* <SkillCard icon="fab fa-python" iconName="Python" /> */}
                <SkillCard icon="fab fa-git-alt" iconName="Git" />
                {/* <SkillCard icon="fab fa-wordpress" iconName="Wordpres" /> */}
                {/* <SkillCard icon="fab fa-elementor" iconName="Elementor" /> */}
                <SkillCard icon="fas fa-database" iconName="MySQL" />
                <SkillCard icon="fa-brands fa-bootstrap" iconName="Bootstrap" />

                <div className="bg-gray hover:bg-dark text-dark hover:text-light">
                    <div className="flex flex-col items-center justify-between h-full pt-3 border-2 md:pt-6 border-dark dark:hover:border-light">
                        <div className="px-8 text-6xl md:text-8xl">
                            <svg
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 518 311"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M259 0C189.933 0 146.767 34.5556 129.5 103.667C155.4 69.1111 185.617 56.1528 220.15 64.7917C239.853 69.7158 253.935 84.0276 269.523 99.856C294.915 125.648 324.306 155.5 388.5 155.5C457.567 155.5 500.733 120.944 518 51.8333C492.1 86.3889 461.883 99.3472 427.35 90.7083C407.647 85.7842 393.565 71.4724 377.977 55.644C352.585 29.8522 323.194 0 259 0ZM129.5 155.5C60.4333 155.5 17.2667 190.056 0 259.167C25.9 224.611 56.1167 211.653 90.65 220.292C110.353 225.225 124.435 239.528 140.023 255.356C165.415 281.148 194.806 311 259 311C328.067 311 371.233 276.444 388.5 207.333C362.6 241.889 332.383 254.847 297.85 246.208C278.147 241.284 264.065 226.972 248.477 211.144C223.085 185.352 193.694 155.5 129.5 155.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <span className="pt-2 pb-2 font-mono text-lg md:pb-5">
                            TailwindCSS
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;

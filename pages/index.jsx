import Layout from '../components/layout';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ImageLoader from '../src/ImageLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedinIn,
    faGithub,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import MyPhoto from '../images/my-photo.png';

export default function Home() {
    return (
        <Layout>
            <div className="mx-auto md:container md:px-8 md:max-w-6xl 2xl:max-w-7xl font-mono">
                <div className="pt-5 md:pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="justify-center px-20 w-full mb-8 md:hidden">
                            <Image
                                loader={ImageLoader}
                                alt="Edi Kurniawan"
                                src={MyPhoto}
                                layout="responsive"
                            />
                        </div>
                        <div className="flex flex-col pl-5 md:pl-0 justify-center font-mono md:col-span-2 text-dark dark:text-light md:space-y-5 pr-5 lg:pr-20 xl:pr-24">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h1 className="text-xl font-bold lg:text-2xl">
                                        Hello I m
                                    </h1>
                                    <h1 className="text-4xl font-bold lg:text-5xl">
                                        Edi Kurniawan
                                    </h1>
                                    <h1 className="text-xl font-bold lg:text-2xl">
                                        a Web Developer
                                    </h1>
                                </div>
                                <p className="font-sans text-base tracking-wider md:text-lg">
                                    I am a hard worker with experience as a web
                                    developer. I love coding so I study every
                                    day to improve my skills regarding web
                                    development. My experience is related to web
                                    development for about 1 year using several
                                    technologies like Laravel, ReactJS, NodeJS
                                    etc to build websites.
                                </p>
                            </div>
                            <div className="pt-10 text-base font-medium md:text-lg">
                                <a
                                    href="https://drive.google.com/u/2/uc?id=1ZSd_Y9xnBtL_nSUjMmIEePklriAS-Il7&export=download"
                                    className="px-4 py-2.5 text-white border-2 dark:text-dark bg-dark dark:bg-light md:px-8 border-dark dark:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
                                    <FontAwesomeIcon icon={faDownload} />
                                    &nbsp; Resume
                                </a>
                            </div>
                        </div>
                        <div className="hidden w-full md:block justify-self-end">
                            <Image
                                loader={ImageLoader}
                                alt="Edi Kurniawan"
                                src={MyPhoto}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    <div className="pt-10 flex flex-col items-center space-y-4">
                        <span className="font-mono text-base font-bold md:text-lg text-dark dark:text-light">
                            Connect with me:
                        </span>
                        <div className="grid grid-cols-4 gap-3">
                            <a
                                href="https://www.linkedin.com/in/edikurniawan-dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media-home">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://github.com/edikurniawan-dev"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media-home">
                                <span>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </a>
                            <a
                                href="https://twitter.com/edikurnia_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media-home">
                                <span>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/edi.kurniawan27/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media-home">
                                <span className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

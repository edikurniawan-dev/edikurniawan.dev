import Layout from '../components/layout';
import Image from 'next/image';
import ImageLoader from '../src/ImageLoader';
import SkillCard from '../components/skillcard';
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
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="justify-center w-full px-16 mb-8 md:hidden">
                    <Image
                        loader={ImageLoader}
                        alt="Edi Kurniawan"
                        src={MyPhoto}
                        layout="responsive"
                        placeholder="blur"
                        unoptimized
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center font-mono md:pl-0 md:col-span-2 text-dark dark:text-light md:space-y-5 lg:pr-20 xl:pr-24">
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
                            developer. I love coding so I study every day to
                            improve my skills regarding web development. My
                            experience is related to web development for about 1
                            year using several technologies like ReactJS,
                            ExpressJS, Laravel, Livewire etc to build websites.
                        </p>
                    </div>
                    <div className="pt-10 text-base font-medium text-center md:text-left md:text-lg">
                        <a
                            href="https://public.bl.files.1drv.com/y4mEwi7nPXGTqgo5-h8ylGu5szFwqTP9gZ5MO7AhTZWTI5UixFXlVqWxI4Z040vrKjnu9m023iOBWUz5Frjai71vidi29hY147byOAsrGqeoMs9GYR2Ciz7hIfRnDr0n1crqXoj_UQFdGVi5UYMmnloPHwXNnZ6PVREBK9_FEYC-DglWllACJ5Aky76WTowarLFrKizV3y6TmXaIrw2NeBv5YAIbOSBdqRc4m2tfxbqH6g"
                            className="download-resume">
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
                        unoptimized
                        priority
                    />
                </div>
            </div>
            <div className="flex flex-col items-center pt-10 space-y-4">
                <span className="font-mono text-base font-bold md:text-lg text-dark dark:text-light">
                    Connect with me:
                </span>
                <div className="grid grid-cols-4 gap-3">
                    <a
                        href="https://www.linkedin.com/in/edikurniawan-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-media">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                        href="https://github.com/edikurniawan-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="social-media">
                        <span>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                    </a>
                    <a
                        href="https://twitter.com/edikurnia_dev"
                        target="_blank"
                        rel="noreferrer"
                        className="social-media">
                        <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </a>
                    <a
                        href="https://www.instagram.com/edi.kurniawan27/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-media">
                        <span className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a>
                </div>
            </div>

            <h1 className="mt-10 mb-5 font-mono text-2xl font-bold text-center underline md:mt-14 md:text-3xl text-dark dark:text-light">
                Skills
            </h1>
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-7 md:gap-10">
                <SkillCard icon="cib:javascript" iconName="Javascript" />
                <SkillCard icon="akar-icons:react-fill" iconName="ReactJS" />
                <SkillCard icon="akar-icons:nextjs-fill" iconName="NextJS" />
                <SkillCard icon="akar-icons:node-fill" iconName="NodeJS" />
                <SkillCard icon="simple-icons:livewire" iconName="Livewire" />
                <SkillCard icon="cib:laravel" iconName="Laravel" />
                <SkillCard icon="cib:mysql" iconName="MySQL" />
                <SkillCard icon="bxl:mongodb" iconName="MongoDB" />
                <SkillCard icon="file-icons:tailwind" iconName="TailwindCSS" />
                <SkillCard icon="fa6-brands:bootstrap" iconName="Bootstrap" />
            </div>
        </Layout>
    );
}

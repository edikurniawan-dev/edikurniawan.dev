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
                            href="https://doc-0c-b8-docs.googleusercontent.com/docs/securesc/e3fc7ttrv1mkn3annl749rd8vi6cl0t7/3tm25qu7baolmdj41kutdq8j67blmmeb/1652244750000/11239491660057031462/11239491660057031462/1oqiuG4r7bQ-4e3an3tOu_yTY1Sfe7PRL?e=download&ax=ACxEAsakAh4ldQt2TqMP0wj1mCDhOyuQhfMtvzyw4_jr81PTfnLZD45LyTLLY14aNQ82LhhipUzWpsna3ZwibRnQy4c6OKk4W9JqWOzO7j5do5TfbiNMU5s-GV6XZmawFQN23iC6ZVAjVBhUbgo1Q1UeHExxRy7hOlhiI39RiOwteVNqIf4SMrOnVPM6LIMAzN2UZrd2rYUamIdSnHgX7Nqm2lJGSnIxTD6C9hwqqiy02m_8bpQCNEP4_jCIWFEaHF3tyVA9hdNnyYIZnP6KEno0cWkeDSD3LwAc0oHB-HlAYKiVOvhsSKvxHLZRt1dmnDB4lJxHk4FHpTsrpRZjfamBLpXgXFz9vvJPRUVuuryQyObJc-XUcGG2-65__sVw_em0fjBCIu17hASf5nPXyAwyeHlY8xwI4quAaWn6skh_naf-MAGVsbbtFgdPpb599RjDO0Hi0S7UrsI4wjvV71rlZtCoVmwX7M1T96Z0lI303rlxqq1uJ15THalr4tPbzlaChESQZmmSlX2Y-aam6Z0o0EcSlyHiufqsEzh58zrhlWsq_FmIAY7KaHOuRH2J0ID6649dubfmp6eatRMiSeShjhEoIS-iApmzTfw8IRuVYLGcsTK7apzOpoUoeSMi6dL1qr_jv0Qf-94SRI07wFCnmQIUefZaMtstIGTUg-DaBwPbADLwFxkm_DuYGVlYw1msiU80kPSGm9_GmDiWxSXflJ30aX02beLNrSiatxQ0_gBW-QDF0HLLWL5h6wLgPe7u0S1to7kzvN8hSycKpq8k&authuser=0&nonce=b341v4pe20o8e&user=11239491660057031462&hash=iprqhvt6plppnnvojnnbf9kdufehm635"
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

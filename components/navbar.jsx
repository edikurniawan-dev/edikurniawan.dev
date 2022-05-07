import Link from 'next/link';
import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faImage,
    faIdCard,
    faNewspaper,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    // const [colorTheme, setTheme] = useDarkMode();

    return (
        <header className="mx-auto md:container md:px-8 md:max-w-6xl 2xl:max-w-7xl font-mono ">
            <nav className="hidden py-4 md:flex">
                <Link href="/">
                    <a>
                        <svg
                            className="h-12"
                            viewBox="0 0 900 900"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M50 0H0V50V850V900H50H850H900V850V50V0H850H50ZM50 50H100H800H850V100V800V850H800H100H50V800V100V50ZM600 200H300H200V300V409V509V600V700H300H700V600H300V509H600H700V409V300V200H600ZM600 300V409H300V300H600Z"
                                fill="#F5F6F7"
                            />
                        </svg>
                    </a>
                </Link>
                <ul className="flex w-full items-center justify-end md:space-x-5 lg:space-x-10 text-lg text-light">
                    <li>
                        <Link href="/experience">
                            <a>Experience</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            <a>Resume</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    {/* <li
                        className="flex-col items-center hidden md:flex"
                        onClick={() => setTheme(colorTheme)}>
                        <button
                            className={
                                colorTheme === 'light'
                                    ? 'bg-light border-2 border-light py-2 md:py-0'
                                    : 'bg-dark border-2 border-light py-2 md:py-0'
                            }>
                            <div className="flex items-center justify-center px-3 py-1 space-x-2">
                                <i
                                    className={
                                        colorTheme === 'light'
                                            ? 'fas fa-sun fa-lg text-black'
                                            : 'fas fa-moon fa-lg text-light'
                                    }></i>
                                <p
                                    className={
                                        colorTheme === 'light'
                                            ? 'text-black font-mono font-medium hidden md:block'
                                            : 'text-light font-mono font-medium hidden md:block'
                                    }>
                                    {colorTheme === 'light' ? 'Lumos' : 'Nox'}
                                </p>
                            </div>
                        </button>
                    </li> */}
                </ul>
            </nav>

            {/* grid navbar for phone*/}
            <div className="grid grid-cols-6 pt-2 pb-1 md:hidden text-light">
                <Link href="/">
                    <a className="flex flex-col items-center justify-end md:hidden">
                        <svg
                            className="h-7"
                            viewBox="0 0 500 502"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M400 209.999V101.039H100V209.999H400ZM100 1.03882H400V0.998779H500L500 1.03882V101.039V209.999L500 309.999H400L100 309.999V401.002H500V501.002L100 501.002H0V401.002V309.999V209.999V101.039V1.03882V1.00186H100V1.03882Z"
                                fill="#F5F6F7"
                            />
                        </svg>
                        <span className="text-xxs">Home</span>
                    </a>
                </Link>
                <Link href="/experience">
                    <a className="flex flex-col items-center justify-end text-3xl md:hidden">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className="text-xxs">Experience</span>
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a className="flex flex-col items-center justify-end text-3xl md:hidden">
                        <FontAwesomeIcon icon={faImage} />
                        <span className="text-xxs">Portfolio</span>
                    </a>
                </Link>
                <Link href="/resume">
                    <a className="flex flex-col items-center justify-end text-3xl md:hidden">
                        <FontAwesomeIcon icon={faIdCard} />
                        <span className="text-xxs">Resume</span>
                    </a>
                </Link>
                <Link href="/blog">
                    <a className="flex flex-col items-center justify-end text-3xl md:hidden">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="text-xxs">Blog</span>
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="flex flex-col items-center justify-end text-3xl md:hidden">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="text-xxs">Contact</span>
                    </a>
                </Link>
            </div>
            {/* <div className="fixed top-0 right-0 md:hidden">
                <div
                    className="flex flex-col items-center"
                    onClick={() => setTheme(colorTheme)}>
                    <button
                        className={
                            colorTheme === 'light' ? 'bg-light' : 'bg-dark'
                        }>
                        <div className="flex justify-center px-2 py-4 items- center">
                            <i
                                className={
                                    colorTheme === 'light'
                                        ? 'fas fa-sun fa-lg text-black'
                                        : 'fas fa-moon fa-lg text-light'
                                }></i>
                        </div>
                    </button>
                </div>
            </div> */}
        </header>
    );
}

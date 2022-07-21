import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faImage,
    faNewspaper,
    faPhone,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button
                    onClick={() => setTheme('light')}
                    className="py-2 border-2 bg-light border-light md:py-0">
                    <div className="flex items-center justify-center py-1 space-x-2 px-7">
                        <FontAwesomeIcon icon={faSun} className="text-black" />
                        <p className="hidden font-mono font-medium text-black md:block">
                            Lumos
                        </p>
                    </div>
                </button>
            );
        } else {
            return (
                <button
                    onClick={() => setTheme('dark')}
                    className="py-2 bg-black border-2 border-light md:py-0">
                    <div className="flex items-center justify-center py-1 space-x-2 px-7">
                        <FontAwesomeIcon icon={faMoon} className="text-light" />
                        <p className="hidden font-mono font-medium text-light md:block">
                            Nox
                        </p>
                    </div>
                </button>
            );
        }
    };
    const renderThemeChangerMobile = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button onClick={() => setTheme('light')} className="bg-light">
                    <div className="flex justify-center p-1.5 text-xl items- center">
                        <FontAwesomeIcon icon={faSun} className="text-dark" />
                    </div>
                </button>
            );
        } else {
            return (
                <button onClick={() => setTheme('dark')} className="bg-dark">
                    <div className="flex justify-center p-1.5 text-xl items- center">
                        <FontAwesomeIcon icon={faMoon} className="text-light" />
                    </div>
                </button>
            );
        }
    };

    return (
        <header className="mx-auto font-mono md:container md:px-8 md:max-w-6xl 2xl:max-w-7xl">
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
                <ul className="flex items-center justify-end w-full text-lg md:space-x-5 lg:space-x-12 text-light">
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
                        <Link href="/article">
                            <a>Article</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li className="flex-col items-center hidden md:flex">
                        {renderThemeChanger()}
                    </li>
                </ul>
            </nav>

            {/* grid navbar for phone*/}
            <div className="grid grid-cols-5 md:hidden gap-x-1 text-light">
                <Link href="/">
                    <a className="flex flex-col items-center justify-end pt-3 pb-3 md:hidden">
                        <svg
                            className="h-6"
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
                        <span className="mt-1.5 font-bold text-xxs">Home</span>
                    </a>
                </Link>
                <Link href="/experience">
                    <a className="flex flex-col items-center justify-end pt-3 pb-3 text-2xl md:hidden">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className="mt-1.5 font-bold text-xxs">
                            Experience
                        </span>
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a className="flex flex-col items-center justify-end pt-3 pb-3 text-2xl md:hidden">
                        <FontAwesomeIcon icon={faImage} />
                        <span className="mt-1.5 font-bold text-xxs">
                            Portfolio
                        </span>
                    </a>
                </Link>
                <Link href="/article">
                    <a className="flex flex-col items-center justify-end pt-3 pb-3 text-2xl md:hidden">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="mt-1.5 font-bold text-xxs">
                            Article
                        </span>
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="flex flex-col items-center justify-end pt-3 pb-3 text-2xl md:hidden">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="mt-1.5 font-bold text-xxs">
                            Contact
                        </span>
                    </a>
                </Link>
            </div>
            <div className="fixed top-0 right-0 md:hidden">
                <div className="flex flex-col items-center">
                    {renderThemeChangerMobile()}
                </div>
            </div>
        </header>
    );
}

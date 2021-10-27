import React from 'react';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

import Logo1 from '../images/logo-with-ractangle.svg';
import Logo2 from '../images/logo-no-ractangle.svg';

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <header className="md:container mx-auto md:px-8 lg:px-12 xl:px-16 xl:space-x-16">
            <nav className="hidden md:flex py-4">
                <div className="hidden md:block">
                    <NavLink exact to="/">
                        <img src={Logo1} alt="" className="h-10 md:h-12" />
                    </NavLink>
                </div>
                <ul className="w-full flex items-end md:items-center justify-around md:justify-end space-x-0 md:space-x-5 lg:space-x-10 font-mono text-xs md:text-lg text-light">
                    <li>
                        <NavLink className="block" to="/skill">
                            Skill
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="block" to="/experience">
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="block" to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="block" to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="block" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li
                        className="hidden md:flex flex-col items-center"
                        onClick={() => setTheme(colorTheme)}>
                        <button
                            className={
                                colorTheme === 'light'
                                    ? 'bg-light border-2 border-white py-2 md:py-0'
                                    : 'bg-dark border-2 border-white py-2 md:py-0'
                            }>
                            <div className="py-1 px-3 flex items-center justify-center space-x-2">
                                <i
                                    className={
                                        colorTheme === 'light'
                                            ? 'fas fa-sun fa-lg text-black'
                                            : 'fas fa-moon fa-lg text-white'
                                    }></i>
                                <p
                                    className={
                                        colorTheme === 'light'
                                            ? 'text-black font-mono font-medium hidden md:block'
                                            : 'text-white font-mono font-medium hidden md:block'
                                    }>
                                    {colorTheme === 'light' ? 'Light' : 'Dark'}
                                </p>
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* grid navbar for phone*/}
            <div className="grid md:hidden grid-cols-6 text-light pt-2 pb-1">
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    exact
                    to="/">
                    <img src={Logo2} alt="" style={{ height: '30px' }} />
                    <span className="text-xs">Home</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden text-3xl"
                    to="/skill">
                    <i className="fas fa-tools"></i>
                    <span className="text-xs">Skill</span>
                </NavLink>
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden text-3xl"
                    to="/experience">
                    <i className="fas fa-briefcase"></i>
                    <span className="text-xs">Experience</span>
                </NavLink>
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden text-3xl"
                    to="/portfolio">
                    <i className="fas fa-image"></i>
                    <span className="text-xs">Portfolio</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden text-3xl"
                    to="/resume">
                    <i className="fas fa-id-card"></i>
                    <span className="text-xs">Resume</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden text-3xl"
                    to="/contact">
                    <i className="fas fa-phone"></i>
                    <span className="text-xs">Contact</span>
                </NavLink>
            </div>
            <div className="fixed md:hidden top-0 right-0">
                <div
                    className="flex flex-col items-center"
                    onClick={() => setTheme(colorTheme)}>
                    <button
                        className={
                            colorTheme === 'light' ? 'bg-light' : 'bg-dark'
                        }>
                        <div className="p-2 flex items- center justify-center">
                            <i
                                className={
                                    colorTheme === 'light'
                                        ? 'fas fa-sun fa-lg text-black'
                                        : 'fas fa-moon fa-lg text-white'
                                }></i>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo1.svg';

const Navbar = () => {
    const [icon, setIcon] = useState('fas fa-moon fa-lg text-white');
    const [iconWordmark, setIconWordmark] = useState('Dark');
    const [colorBgIcon, setColorBgIcon] = useState('bg-dark');
    const [colorText, setColorText] = useState(
        'text-white font-mono font-medium hidden md:block',
    );

    const handleClick = () => {
        setIcon(!icon);
        setIconWordmark(!iconWordmark);
        setColorBgIcon(!colorBgIcon);
        setColorText(!colorText);
    };

    return (
        <header className="md:container mx-auto md:px-8 lg:px-12 xl:px-16 xl:space-x-16">
            <nav className="hidden md:flex py-4">
                <div className="hidden md:block">
                    <NavLink exact to="/">
                        <img src={Logo} alt="" className="h-10 md:h-12" />
                    </NavLink>
                </div>
                <ul className="w-full flex items-end md:items-center justify-around md:justify-end space-x-0 md:space-x-5 lg:space-x-10 font-mono text-xs md:text-lg text-light">
                    <li className="block md:hidden">
                        <NavLink exact to="/">
                            <img src={Logo} alt="" className="h-10 md:h-12" />
                        </NavLink>
                    </li>
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
                        onClick={handleClick}>
                        <button
                            className={
                                colorBgIcon
                                    ? 'bg-dark border-2 border-white py-2 md:py-0'
                                    : 'bg-light border-2 border-white py-2 md:py-0'
                            }>
                            <div className="py-1 px-3 flex items-center justify-center space-x-2">
                                <i
                                    className={
                                        icon
                                            ? 'fas fa-moon fa-lg text-white'
                                            : 'fas fa-sun fa-lg text-black'
                                    }></i>
                                <p
                                    className={
                                        colorText
                                            ? 'text-white font-mono font-medium hidden md:block'
                                            : 'text-black font-mono font-medium hidden md:block'
                                    }>
                                    {iconWordmark ? 'Dark' : 'Light'}
                                </p>
                            </div>
                        </button>
                        <span className="block md:hidden text-xs">
                            {iconWordmark ? 'Dark' : 'Light'}
                        </span>
                    </li>
                </ul>
            </nav>

            {/* grid navbar for phone*/}
            <div className="grid md:hidden grid-cols-6 text-light pt-2 pb-1">
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    exact
                    to="/">
                    <img src={Logo} alt="" style={{ height: '34px' }} />
                    <span className="text-xs">Home</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    to="/skill">
                    <i className="fas fa-tools fa-2x"></i>
                    <span className="text-xs">Skill</span>
                </NavLink>
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    to="/experience">
                    <i className="fas fa-briefcase fa-2x"></i>
                    <span className="text-xs">Experience</span>
                </NavLink>
                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    to="/portfolio">
                    <i className="fas fa-image fa-2x"></i>
                    <span className="text-xs">Portfolio</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    to="/resume">
                    <i class="fas fa-id-card fa-2x"></i>
                    <span className="text-xs">Resume</span>
                </NavLink>

                <NavLink
                    className="flex flex-col items-center justify-end md:hidden"
                    to="/contact">
                    <i class="fas fa-phone fa-2x"></i>
                    <span className="text-xs">Contact</span>
                </NavLink>
            </div>
            <div className="fixed md:hidden top-0 right-0">
                <div
                    className="flex flex-col items-center"
                    onClick={handleClick}>
                    <button className={colorBgIcon ? 'bg-dark' : 'bg-light'}>
                        <div className="p-2 flex items-center justify-center">
                            <i
                                className={
                                    icon
                                        ? 'fas fa-moon fa-lg text-white'
                                        : 'fas fa-sun fa-lg text-black'
                                }></i>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

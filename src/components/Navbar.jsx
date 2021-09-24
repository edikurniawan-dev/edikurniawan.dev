import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo.svg';

const Navbar = () => {
    const [icon, setIcon] = useState('fas fa-moon fa-lg');
    const [iconWordmark, setIconWordmark] = useState('Dark');
    const [colorBgIcon, setColorBgIcon] = useState('bg-gray-700 rounded-full');

    const handleClick = () => {
        setIcon(!icon);
        setIconWordmark(!iconWordmark);
        setColorBgIcon(!colorBgIcon);
    };
    return (
        <header className="sticky top-0 z-50 bg-white">
            <nav className="flex justify-between items-center text-lg py-4">
                <NavLink exact to="/">
                    <img src={Logo} alt="" className="h-12" />
                </NavLink>
                <ul className="flex items-center space-x-10 font-hind text-blue-600">
                    <li>
                        <NavLink to="/about-me">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skill">Skill</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                        <button
                            className={
                                colorBgIcon
                                    ? 'bg-gray-700 rounded-full'
                                    : 'bg-blue-light rounded-full'
                            }
                            onClick={handleClick}>
                            <div className=" py-2 px-3 flex items-center justify-center text-white space-x-2">
                                <i
                                    className={
                                        icon
                                            ? 'fas fa-moon fa-lg'
                                            : 'fas fa-sun fa-lg'
                                    }></i>
                                <p className="font-hind font-semibold">
                                    {iconWordmark ? 'Dark' : 'Light'}
                                </p>
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

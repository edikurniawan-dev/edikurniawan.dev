import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo1.svg';

const Navbar = () => {
    const [icon, setIcon] = useState('fas fa-moon fa-lg text-white');
    const [iconWordmark, setIconWordmark] = useState('Dark');
    const [colorBgIcon, setColorBgIcon] = useState(
        'bg-dark border-2 border-white',
    );
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
            <nav className="flex py-4">
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
                        {/* <NavLink
                            className="block md:hidden text-xs text-light text-center"
                            to="/">
                            Home
                        </NavLink> */}
                    </li>
                    <li>
                        <NavLink
                            className="block md:hidden text-center"
                            to="/skill">
                            <i className="fas fa-tools fa-3x"></i>
                        </NavLink>
                        <NavLink className="hidden md:block" to="/skill">
                            Skill
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block md:hidden text-center"
                            to="/experience">
                            <i className="fas fa-briefcase fa-3x"></i>
                        </NavLink>
                        <NavLink className="hidden md:block" to="/experience">
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block md:hidden text-center"
                            to="/portfolio">
                            <i className="fas fa-image fa-3x"></i>
                        </NavLink>
                        <NavLink className="hidden md:block" to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block md:hidden text-center"
                            to="/resume">
                            <i class="fas fa-id-card fa-3x"></i>
                        </NavLink>
                        <NavLink className="hidden md:block" to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="block md:hidden text-center"
                            to="/contact">
                            <i class="fas fa-phone fa-3x"></i>
                        </NavLink>
                        <NavLink className="hidden md:block" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li
                        className="flex flex-col items-center"
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
                        {/* <span className="block md:hidden text-xs">
                            {iconWordmark ? 'Dark' : 'Light'}
                        </span> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

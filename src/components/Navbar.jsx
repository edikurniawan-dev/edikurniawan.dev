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
        <div className="flex justify-between items-center py-7">
            <div className="">
                <NavLink exact to="/">
                    <img src={Logo} alt="" className="h-14" />
                </NavLink>
            </div>
            <ul className="flex items-center space-x-10 font-poppins text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-light">
                <li>
                    <NavLink to="/about-me">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Skill</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Resume</NavLink>
                </li>

                <li>
                    <button
                        className={
                            colorBgIcon
                                ? 'bg-gray-700 rounded-full'
                                : 'bg-blue-light rounded-full'
                        }
                        onClick={handleClick}>
                        <div className=" px-3 py-2 flex items-center justify-center text-white space-x-2">
                            <i
                                className={
                                    icon
                                        ? 'fas fa-moon fa-lg'
                                        : 'fas fa-sun fa-lg'
                                }></i>
                            <p className="font-poppins text-lg tracking-tight">
                                {iconWordmark ? 'Dark' : 'Light'}
                            </p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 bg-blue-500">
            <div className="">
                <NavLink exact to="/">
                    <img src={Logo} className="h-14" alt="" srcset="" />
                </NavLink>
            </div>
            <ul className="flex space-x-5">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

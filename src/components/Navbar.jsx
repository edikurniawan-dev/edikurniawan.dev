import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-7">
            <div className="">
                <NavLink exact to="/">
                    <svg
                        className="h-16"
                        viewBox="0 0 340 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 260H300C322.091 260 340 277.909 340 300V300C340 322.091 322.091 340 300 340H0V260Z"
                            fill="#4E47E5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M40 0H0V40V80V190C0 212.091 17.9086 230 40 230C44.5521 230 48.9267 229.24 53.0035 227.839L311.902 148.203L311.901 148.2C328.181 143.133 340 127.947 340 110V40C340 17.9086 322.091 0 300 0H40ZM80 80V135.836L260 80.4688V80H80Z"
                            fill="#10A2E9"
                        />
                    </svg>
                </NavLink>
            </div>
            {/* <ul className="flex items-center space-x-7 font-poppins text-lg tracking-tight"> */}
            <ul className="flex items-center space-x-7 font-poppins text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-light">
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
                    <button className="">
                        <div className="bg-gray-700 rounded-full px-3 py-2 flex items-center justify-center text-white space-x-2">
                            <i className="fas fa-moon fa-lg"></i>
                            <p className="font-poppins text-lg tracking-tight">
                                Dark
                            </p>
                            <i className="hidden fas fa-sun fa-lg "></i>

                            <p className="hidden font-poppins text-lg tracking-tight">
                                Light
                            </p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

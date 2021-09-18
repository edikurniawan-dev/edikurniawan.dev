import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-7 text-blue-light">
            <div className="">
                <NavLink exact to="/">
                    <svg
                        className="h-14"
                        viewBox="0 0 503 302"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M142.5 0H0V85H142.5C165.972 85 185 65.972 185 42.5C185 19.028 165.972 0 142.5 0ZM460.5 108C437.028 108 418 127.028 418 150.5V302H503V150.5C503 127.028 483.972 108 460.5 108ZM418 42.5C418 19.028 437.028 0 460.5 0C483.972 0 503 19.028 503 42.5C503 65.972 483.972 85 460.5 85C437.028 85 418 65.972 418 42.5ZM294 0H209V302H294C349.229 302 394 257.229 394 202V100C394 44.7715 349.229 0 294 0ZM0 108H142.5C165.972 108 185 127.028 185 150.5C185 173.972 165.972 193 142.5 193H0V108ZM142.5 217H0V302H142.5C165.972 302 185 282.972 185 259.5C185 236.028 165.972 217 142.5 217Z"
                            fill="currentColor"
                        />
                    </svg>
                </NavLink>
            </div>
            <ul className="flex items-center space-x-7 font-poppins text-lg tracking-tight">
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
                    <NavLink to="/contact">Contact</NavLink>
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

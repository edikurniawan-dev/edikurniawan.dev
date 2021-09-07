import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 text-blue-500">
            <div className="">
                <NavLink exact to="/">
                    <svg
                        className="h-16"
                        viewBox="0 0 488 408"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M216.002 12.1394C194.848 -5.61071 163.31 -2.85146 145.56 18.3023L7.5692 182.754C-0.0659778 191.853 -1.7718 203.954 2.04083 214.361C3.23924 218.544 5.31504 222.549 8.29264 226.098L145.56 389.687C163.31 410.841 194.848 413.6 216.002 395.85L221.364 391.35C224.326 388.865 224.712 384.45 222.227 381.488L73.292 203.995L222.227 26.5007C224.712 23.5392 224.326 19.1239 221.364 16.6389L216.002 12.1394ZM265.793 16.6389C262.831 19.1239 262.445 23.5392 264.93 26.5007L414.227 204.426L265.654 381.488C263.169 384.45 263.555 388.865 266.516 391.35L271.879 395.85C293.032 413.6 324.57 410.841 342.32 389.687L479.588 226.098C484.877 219.794 487.321 212.049 487.056 204.426C487.321 196.802 484.877 189.057 479.588 182.754L341.597 18.3023C323.847 -2.85149 292.309 -5.61068 271.155 12.1394L265.793 16.6389ZM264 126.754C264 123.024 267.024 120 270.754 120C297.4 120 319 141.6 319 168.246V241.754C319 268.4 297.4 290 270.754 290C267.024 290 264 286.976 264 283.246V126.754ZM144 225C144 228.866 147.134 232 151 232H196.5C211.688 232 224 219.688 224 204.5C224 189.312 211.688 177 196.5 177H151C147.134 177 144 180.134 144 184V225Z"
                            fill="currentColor"
                        />
                    </svg>
                </NavLink>
            </div>
            <ul className="flex space-x-6 font-poppins">
                <li>
                    <NavLink exact to="/">
                        About Me
                    </NavLink>
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
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return (
        <div className="flex items-center justify-center py-3 text-sm bg-black text-light">
            Created with &nbsp;
            <span>
                <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500 animate-pulse"
                />
            </span>
            , Inspired by &nbsp;
            <a
                href="https://www.freecodecamp.org/"
                className="flex items-center font-mono underline"
                target="_blank"
                rel="noreferrer">
                freeCodeCamp
                <span>
                    <FontAwesomeIcon
                        icon={faFreeCodeCamp}
                        className="text-lg"
                    />
                </span>
            </a>
        </div>
    );
}

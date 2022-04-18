import React from 'react';

const ExperienceCard = (props) => {
    return (
        <div className="flex items-center justify-center py-3 text-sm bg-black text-light">
            Created with &nbsp;
            <span>
                <i className="text-red-500 fa-solid fa-heart animate-pulse"></i>
            </span>
            &nbsp; and Inspired by &nbsp;
            <a
                href="https://www.freecodecamp.org/"
                className="flex items-center font-mono underline"
                target="_blank"
                rel="noreferrer">
                freeCodeCamp
                <span>
                    <i className="text-lg fa-brands fa-free-code-camp"></i>
                </span>
            </a>
        </div>
    );
};
export default ExperienceCard;

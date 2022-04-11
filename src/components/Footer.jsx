import React from 'react';

const ExperienceCard = (props) => {
    return (
        <div className="flex items-center justify-center py-3 bg-black text-light">
            Created with &nbsp;
            <span>
                <i className="fa-solid fa-heart"></i>
            </span>
            &nbsp; and Inspired by &nbsp;
            <a
                href="https://www.freecodecamp.org/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer">
                freeCodeCamp
                <span>
                    <i className="fa-brands fa-free-code-camp"></i>
                </span>
            </a>
        </div>
    );
};
export default ExperienceCard;

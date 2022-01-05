import React from 'react';

const PortfolioCard = (props) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0 z-0 bg-center bg-cover"></div>
            <img
                loading="lazy"
                src={props.image}
                alt=""
                className="border-2 border-black dark:border-light"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white duration-300 opacity-0 bg-dark hover:bg-opacity-90 hover:opacity-100">
                <a
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-md md:text-xl ">
                    <h1 className="font-mono text-xl font-bold md:text-2xl hover:underline">
                        {props.title}
                    </h1>
                    &nbsp;
                    <i className="fas fa-link"></i>
                </a>
                <p className="px-1 pt-2 font-sans text-base tracking-wider md:px-10 md:pt-5 md:text-lg">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default PortfolioCard;

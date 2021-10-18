import React from 'react';

const PortfolioCard = (props) => {
    return (
        <div className="w-full relative">
            <div className="absolute inset-0 bg-cover bg-center z-0"></div>
            <img src={props.image} alt="" className="border-2" />

            <div className="bg-dark hover:bg-opacity-90 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center">
                <a href="#0">
                    <h1 className="text-xl md:text-2xl font-mono font-bold pb-2 md:pb-5 hover:underline">
                        {props.title}
                    </h1>
                    <p className="px-1 md:px-10 text-base md:text-lg tracking-wider font-sans">
                        {props.description}
                    </p>
                </a>
            </div>
        </div>
    );
};

export default PortfolioCard;

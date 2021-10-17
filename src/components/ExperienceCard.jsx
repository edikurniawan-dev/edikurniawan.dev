import React from 'react';

const ExperienceCard = (props) => {
    return (
        // <div className="mb-32">
        <div className="flex flex-col sm:flex-row items-center">
            <div className={props.place}>
                <div className={props.padding}>
                    <div className="p-6 bg-white">
                        <h3 className="font-bold font-mono text-dark text-xl">
                            {props.companyName}
                        </h3>
                        <p className=" text-lg mb-2 font-mono font-bold text-dark">
                            {props.during}
                        </p>
                        <hr />
                        <p className="font-sans tracking-wider text-dark mt-3">
                            {props.task}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white text-lg w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                {props.number}
            </div>
        </div>
        // </div>
    );
};

export default ExperienceCard;

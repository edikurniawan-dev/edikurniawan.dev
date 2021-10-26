import React from 'react';

const ExperienceCard = (props) => {
    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className={props.place}>
                <div className={props.padding}>
                    <div className="p-6 bg-white dark:bg-light">
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
            <div className="bg-dark dark:bg-light text-white dark:text-dark font-bold text-lg w-9 h-9 absolute left-1/2 -translate-y-6 lg:translate-y-0 transform -translate-x-1/2 flex items-center justify-center border-2 border-dark">
                {props.number}
            </div>
        </div>
    );
};

export default ExperienceCard;

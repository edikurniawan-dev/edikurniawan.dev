import React from 'react';

const SkillCard = (props) => {
    return (
        <div className="h-44 bg-gray hover:bg-dark text-dark hover:text-light">
            <div className="h-full pt-6 flex flex-col justify-between items-center border-2 border-dark">
                <div className="text-8xl px-8">
                    <i className={props.icon}></i>
                </div>
                <span className="pb-5 pt-2 text-lg font-mono">
                    {props.iconName}
                </span>
            </div>
        </div>
    );
};

export default SkillCard;

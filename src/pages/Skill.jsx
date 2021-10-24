import React from 'react';
import SkillCard from '../components/SkillCard';

const Skill = () => {
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl md:text-3xl text-dark dark:text-light font-bold underline">
                Skill
            </h1>
            <br />
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-7 md:gap-10">
                <SkillCard icon="fab fa-html5" iconName="HTML" />
                <SkillCard icon="fab fa-css3-alt" iconName="CSS" />
                <SkillCard icon="fab fa-js" iconName="Javascript" />
                <SkillCard icon="fab fa-react" iconName="ReactJS" />
                <SkillCard icon="fab fa-node-js" iconName="NodeJS" />
                <SkillCard icon="fab fa-laravel" iconName="Laravel" />
                <SkillCard icon="fab fa-python" iconName="Python" />
                <SkillCard icon="fab fa-git-alt" iconName="Git" />
                <SkillCard icon="fab fa-wordpress" iconName="Wordpres" />
                <SkillCard icon="fab fa-elementor" iconName="Elementor" />
                <SkillCard icon="fas fa-database" iconName="MySQL" />

                <div className="bg-gray hover:bg-dark text-dark hover:text-light">
                    <div className="h-full pt-3 md:pt-6 flex flex-col justify-between items-center border-2 border-dark dark:hover:border-light">
                        <div className="text-6xl md:text-8xl px-8">
                            <svg
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 518 311"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M259 0C189.933 0 146.767 34.5556 129.5 103.667C155.4 69.1111 185.617 56.1528 220.15 64.7917C239.853 69.7158 253.935 84.0276 269.523 99.856C294.915 125.648 324.306 155.5 388.5 155.5C457.567 155.5 500.733 120.944 518 51.8333C492.1 86.3889 461.883 99.3472 427.35 90.7083C407.647 85.7842 393.565 71.4724 377.977 55.644C352.585 29.8522 323.194 0 259 0ZM129.5 155.5C60.4333 155.5 17.2667 190.056 0 259.167C25.9 224.611 56.1167 211.653 90.65 220.292C110.353 225.225 124.435 239.528 140.023 255.356C165.415 281.148 194.806 311 259 311C328.067 311 371.233 276.444 388.5 207.333C362.6 241.889 332.383 254.847 297.85 246.208C278.147 241.284 264.065 226.972 248.477 211.144C223.085 185.352 193.694 155.5 129.5 155.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <span className="pb-2 md:pb-5 pt-2 text-lg font-mono">
                            TailwindCSS
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Skill;

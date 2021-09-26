import React from 'react';

const Skill = () => {
    return (
        <main className="">
            <h1 className="font-ubuntu text-3xl text-blue-light underline">
                Skill
            </h1>
            <br />
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#DD4B25' }}>
                            <i className="fab fa-html5"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            HTML
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#254BDD' }}>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            CSS
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#F7DF1E' }}>
                            <i className="fab fa-js"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Javascript
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#00D1F7' }}>
                            <i className="fab fa-react"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            React
                        </span>
                    </div>
                </div>

                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#689F63' }}>
                            <i className="fab fa-node-js"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            NodeJS
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#EF3B2D' }}>
                            <i className="fab fa-laravel"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Laravel
                        </span>
                    </div>
                </div>

                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#3470A2' }}>
                            <i className="fab fa-python"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Python
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#E84E31' }}>
                            <i className="fab fa-git-alt"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Git
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#056085' }}>
                            <i className="fab fa-wordpress"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Wordpres
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#B92E5B' }}>
                            <i className="fab fa-elementor"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            Elementor
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div
                            className="text-8xl px-8 text-primary"
                            style={{ color: '#F67A00' }}>
                            <i class="fas fa-database"></i>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            SQL and noSQL
                        </span>
                    </div>
                </div>
                <div className="h-44">
                    <div className="h-full pt-6 flex flex-col justify-between items-center rounded-2xl shadow-lg border-2 ">
                        <div className="text-8xl">
                            <svg
                                px-8
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 518 311"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M259 0C189.933 0 146.767 34.5556 129.5 103.667C155.4 69.1111 185.617 56.1528 220.15 64.7917C239.853 69.7158 253.935 84.0276 269.523 99.856C294.915 125.648 324.306 155.5 388.5 155.5C457.567 155.5 500.733 120.944 518 51.8333C492.1 86.3889 461.883 99.3472 427.35 90.7083C407.647 85.7842 393.565 71.4724 377.977 55.644C352.585 29.8522 323.194 0 259 0ZM129.5 155.5C60.4333 155.5 17.2667 190.056 0 259.167C25.9 224.611 56.1167 211.653 90.65 220.292C110.353 225.225 124.435 239.528 140.023 255.356C165.415 281.148 194.806 311 259 311C328.067 311 371.233 276.444 388.5 207.333C362.6 241.889 332.383 254.847 297.85 246.208C278.147 241.284 264.065 226.972 248.477 211.144C223.085 185.352 193.694 155.5 129.5 155.5Z"
                                    fill="#06B6D4"
                                />
                            </svg>
                        </div>
                        <span className="pb-5 text-gray-600 text-base text-foreground font-ubuntu">
                            TailwindCSS
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Skill;

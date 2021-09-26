import React from 'react';

const Experience = () => {
    return (
        <main className="">
            <h1 className="font-ubuntu text-3xl text-blue-light underline">
                Experience
            </h1>
            <br />

            <div class="h-full flex flex-col justify-center">
                <div class="py-3 sm:mx-auto w-full px-2 sm:px-0">
                    <div class="relative text-gray-700 text-sm font-semibold">
                        {/* <!-- Vertical bar running through middle --> */}
                        <div class="rounded hidden sm:block w-1 bg-blue-light opacity-50 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div class="mt-6 sm:mt-0 sm:mb-12 ">
                            <div class="flex flex-col sm:flex-row items-center">
                                <div class="flex justify-start w-full mx-auto items-center">
                                    <div class="w-full sm:w-1/2 sm:pr-20">
                                        <div class="p-4 shadow-xl bg-white rounded-2xl border-2">
                                            <h3 class="font-bold text-blue-light text-xl">
                                                PT Banopolis Inovasi Kendara
                                                (Intern)
                                            </h3>
                                            <p className="mb-2 text-gray-900">
                                                Front-End Web Developer | June
                                                2020 - July 2020
                                            </p>
                                            <hr />
                                            <p class="text-sm  tracking-wide text-gray-900 text-opacity-100 mt-3">
                                                Develop UI website dashboard
                                                admin of Jaramba apps. I
                                                develope using figma, bootstrap,
                                                and sweetalert. This application
                                                serves to monitor the location
                                                of the bus that is running. In
                                                addition to storing route data,
                                                drivers, buses and bus travel
                                                history.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-full bg-gray-500  text-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    1
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div class="mt-6 sm:mt-0 sm:mb-12">
                            <div class="flex flex-col sm:flex-row items-center">
                                <div class="flex justify-end w-full mx-auto items-center">
                                    <div class="w-full sm:w-1/2 sm:pl-20">
                                        <div class="p-4 bg-white border-2 rounded-2xl shadow-xl">
                                            <h3 class="font-bold text-blue-light text-xl">
                                                Freeleance
                                            </h3>
                                            <p className="mb-2 text-gray-900">
                                                Web Developer | June 2020 -
                                                Present
                                            </p>
                                            <hr />
                                            <p class="text-sm  tracking-wide text-gray-900 text-opacity-100 mt-3">
                                                Develop a website according to
                                                the client's request
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="rounded-full bg-gray-500  text-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Experience;

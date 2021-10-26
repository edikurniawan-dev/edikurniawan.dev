import React from 'react';

const Contact = () => {
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl md:text-3xl text-dark dark:text-light font-bold underline">
                Contact
            </h1>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans tracking-wider text-base md:text-lg text-dark dark:text-light">
                <div className="flex flex-col justify-between">
                    <span className="pb-5">
                        Contact me if you want to talk more about web
                        development via social media or via form
                    </span>
                    <div className="flex flex-col space-y-4 items-center">
                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://wa.me/6281350400660"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '9px',
                                        paddingRight: '9px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-whatsapp"></i>
                            </a>
                            <h1>+6281350400660</h1>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://t.me/edikurniawan_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '9px',
                                        paddingRight: '9px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-telegram-plane"></i>
                            </a>
                            <h1>+6281350400660</h1>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="mailto:edikurniawan.dev@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '7px',
                                        paddingRight: '7px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fa fa-envelope"></i>
                            </a>
                            <span>edikurniawan.dev@gmail.com</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://www.google.com/maps/place/Bandar+Lampung,+Kota+Bandar+Lampung,+Lampung/@-5.4068534,105.2817431,13z/data=!4m5!3m4!1s0x2e40da46f3aa6fbf:0x3039d80b220cc40!8m2!3d-5.3971396!4d105.2667887"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '11.5px',
                                        paddingRight: '11.5px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fa fa-map-marker-alt"></i>
                            </a>
                            <span>Bandar Lampung, Lampung</span>
                        </div>
                    </div>
                    <div className="pt-10 pb-4 space-y-4 flex flex-col items-center">
                        <span className="text-base md:text-lg font-bold font-mono text-dark dark:text-light">
                            Connect with me:
                        </span>
                        <div className="space-x-4">
                            <a
                                href="https://www.linkedin.com/in/edikurniawan-dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '9.5px',
                                        paddingRight: '9.5px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/edikurniawan-dev"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '8px',
                                        paddingRight: '8px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-github"></i>
                            </a>
                            <a
                                href="https://twitter.com/edikurnia_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '7.5px',
                                        paddingRight: '7.5px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/edi.kurniawan27/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl md:text-3xl">
                                <i
                                    style={{
                                        paddingLeft: '9.5px',
                                        paddingRight: '9.5px',
                                        paddingTop: '8px',
                                        paddingBottom: '8px',
                                    }}
                                    className="border-2 border-dark dark:border-light bg-dark dark:bg-light text-white dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <hr className="block lg:hidden" />
                </div>
                <form className="flex flex-col space-y-8 font-bold font-mono">
                    <div className="flex flex-col space-y-2">
                        <label>Name</label>
                        <input
                            className="border-2 border-dark h-12 text-dark px-3"
                            type="text"
                            name="user_name"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Email</label>
                        <input
                            className="border-2 border-dark h-12 text-dark px-3"
                            type="email"
                            name="user_email"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Subject</label>
                        <input
                            className="border-2 border-dark h-12 text-dark px-3"
                            type="email"
                            name="user_email"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Message</label>
                        <textarea
                            className="border-2 border-dark h-52 text-dark px-3"
                            name="message"
                        />
                    </div>
                    <button className="font-mono font-bold bg-dark dark:bg-light text-light dark:text-dark h-10 md:h-12 hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-dark dark:border-light">
                        Send
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;

import React from 'react';
import Layout from '../components/layout';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTelegram,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const form = React.createRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_j710t24',
                'template_32mnhrd',
                e.target,
                'user_LZaldX7s2kcQzGvNyHpuy',
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    e.target.reset();
                    toast.success(result.text + ', Message Sent 👌', {
                        theme: 'colored',
                    });
                },
                (error) => {
                    // console.log(error.text);
                    toast.error('Failed to Send Message 😱', {
                        theme: 'colored',
                    });
                },
            );
    };

    return (
        <Layout title="Contact | Edi Kurniawan">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Contact
            </h1>
            <br />
            <div className="grid grid-cols-1 gap-8 font-sans text-base tracking-wider lg:grid-cols-2 md:text-lg text-dark dark:text-light">
                <div className="flex flex-col justify-between">
                    <span className="pb-5">
                        Contact me if you want to talk more about web
                        development via social media or via form
                    </span>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://wa.me/6281350400660"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    className="px-0.5"
                                />
                            </a>
                            <h1>+6281350400660</h1>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://t.me/edikurniawan_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                            <h1>+6281350400660</h1>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="mailto:edikurniawan.dev@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <span>edikurniawan.dev@gmail.com</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <a
                                href="https://www.google.com/maps/place/Bandar+Lampung,+Kota+Bandar+Lampung,+Lampung/@-5.4068534,105.2817431,13z/data=!4m5!3m4!1s0x2e40da46f3aa6fbf:0x3039d80b220cc40!8m2!3d-5.3971396!4d105.2667887"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="px-1"
                                />
                            </a>
                            <span>Bandar Lampung, Lampung</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pt-10 pb-4 space-y-4">
                        <span className="font-mono text-base font-bold md:text-lg text-dark dark:text-light">
                            Connect with me:
                        </span>
                        <div className="grid grid-cols-4 gap-3">
                            <a
                                href="https://www.linkedin.com/in/edikurniawan-dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="https://github.com/edikurniawan-dev"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://twitter.com/edikurnia_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.instagram.com/edi.kurniawan27/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-media">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                    <hr className="block lg:hidden" />
                </div>
                <form
                    className="flex flex-col space-y-8 font-mono font-bold"
                    onSubmit={sendEmail}
                    ref={form}>
                    <div className="flex flex-col space-y-2">
                        <label>Name</label>
                        <input
                            className="h-12 px-3 border-2 border-dark dark:bg-light dark:border-light text-dark focus:outline-none"
                            type="text"
                            name="user_name"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Email</label>
                        <input
                            className="h-12 px-3 border-2 border-dark dark:bg-light dark:border-light text-dark focus:outline-none"
                            type="email"
                            name="user_email"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Subject</label>
                        <input
                            className="h-12 px-3 border-2 border-dark dark:bg-light dark:border-light text-dark focus:outline-none"
                            type="text"
                            name="user_subject"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>Message</label>
                        <textarea
                            className="px-3 py-3 border-2 border-dark dark:bg-light dark:border-light h-52 text-dark focus:outline-none"
                            name="user_message"
                            required
                        />
                    </div>
                    <button
                        className="h-10 font-mono font-bold border-2 bg-dark dark:bg-light text-light dark:text-dark md:h-12 hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-dark dark:border-light"
                        type="submit">
                        Send
                    </button>
                </form>
            </div>
        </Layout>
    );
}

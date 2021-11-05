import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimentions';

const Resume = () => {
    const { height, width } = useWindowDimensions();
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl md:text-3xl text-dark dark:text-light font-bold underline">
                Resume
            </h1>
            <br />
            <div className="flex justify-center items-center">
                <iframe
                    title="resume"
                    src="https://drive.google.com/file/d/1ZNbrd_UVAgvtOSRa7j87hS-ZrJnwK3zb/preview"
                    width={width}
                    height={height - 300}
                    allow="autoplay"></iframe>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center md:justify-start items-center font-mono space-x-6 font-medium text-base md:text-lg pt-5">
                    <a
                        href="https://doc-00-b8-docs.googleusercontent.com/docs/securesc/e3fc7ttrv1mkn3annl749rd8vi6cl0t7/neggjnchmv40h11e55r55eap6t5e2v9q/1636032900000/11239491660057031462/11239491660057031462/1ZNbrd_UVAgvtOSRa7j87hS-ZrJnwK3zb?e=download&authuser=3&nonce=4re7t2mmac7ha&user=11239491660057031462&hash=sfp28gi8cthrho8bebe1286662qk8k6l"
                        className="text-white dark:text-dark bg-dark dark:bg-light py-2 px-4 md:px-8 border-2 border-dark dark:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
                        <i className="fas fa-file-download"></i>
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Resume;

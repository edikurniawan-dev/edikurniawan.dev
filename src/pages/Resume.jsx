import React from 'react';
import cv1 from '../images/resume.pdf';
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
                    src={cv1}
                    width={width}
                    height={height}
                    allow="autoplay"></iframe>
            </div>
        </main>
    );
};

export default Resume;

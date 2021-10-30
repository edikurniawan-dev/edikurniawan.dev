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
                    height={height - 250}
                    allow="autoplay"></iframe>
            </div>
        </main>
    );
};

export default Resume;

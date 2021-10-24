import React from 'react';
import Myresume from '../images/resume.pdf';

const Resume = () => {
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl md:text-3xl text-dark font-bold underline">
                Resume
            </h1>
            <br />
            <div className="flex justify-center w-full items-center">
                <iframe
                    title="resume"
                    src={Myresume}
                    width="1920"
                    height="560"
                    allow="autoplay"></iframe>
                {/* <iframe
                    title="resume"
                    src="https://drive.google.com/file/d/1tPTUPZiu5GYUYsRLO8c2rhvqSUEIyzkr/preview"
                    width="1920"
                    height="560"
                    allow="autoplay"></iframe> */}
            </div>
        </main>
    );
};

export default Resume;

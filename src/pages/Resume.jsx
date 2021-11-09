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
                    src="https://drive.google.com/file/d/1rKT5To63JC_uIF3xFvopNXm_zwOEDd2h/preview"
                    width={width}
                    height={height - 300}
                    allow="autoplay"></iframe>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center md:justify-start items-center font-mono space-x-6 font-medium text-base md:text-lg pt-5">
                    <a
                        href="https://doc-0s-b8-docs.googleusercontent.com/docs/securesc/e3fc7ttrv1mkn3annl749rd8vi6cl0t7/l4lkn2c5rcdgb2cm0rrht36h4ccdvaqe/1636463625000/11239491660057031462/11239491660057031462/1rKT5To63JC_uIF3xFvopNXm_zwOEDd2h?e=download&authuser=3&nonce=7qtbnvvlreuh2&user=11239491660057031462&hash=fel5186nc7hvdk61hod36bdfu4gv1mdv"
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

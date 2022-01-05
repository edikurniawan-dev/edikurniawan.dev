import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimentions';

const Resume = () => {
    const { height, width } = useWindowDimensions();
    return (
        <main className="flex flex-col pt-5 md:pt-10">
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Resume
            </h1>
            <br />
            <div className="flex items-center justify-center">
                <iframe
                    loading="lazy"
                    title="resume"
                    src="https://drive.google.com/file/d/1rKT5To63JC_uIF3xFvopNXm_zwOEDd2h/preview"
                    width={width}
                    height={height - 300}
                    allow="autoplay"></iframe>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-5 space-x-6 font-mono text-base font-medium md:justify-start md:text-lg">
                    <a
                        href="https://drive.google.com/uc?id=1rKT5To63JC_uIF3xFvopNXm_zwOEDd2h&export=download"
                        className="px-4 py-2 text-white border-2 dark:text-dark bg-dark dark:bg-light md:px-8 border-dark dark:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
                        <i className="fas fa-file-download"></i>
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Resume;

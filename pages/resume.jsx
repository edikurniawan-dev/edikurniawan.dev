import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';

export default function Resume() {
    return (
        <Layout>
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Resume
            </h1>
            <br />
            <div className="flex items-center justify-center">
                <iframe
                    loading="lazy"
                    title="resume"
                    src="https://drive.google.com/file/d/1ZSd_Y9xnBtL_nSUjMmIEePklriAS-Il7/preview"
                    className="w-full h-[58vh]"
                    allow="autoplay"></iframe>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-5 space-x-6 font-mono text-base font-medium md:justify-start md:text-lg">
                    <a
                        href="https://drive.google.com/u/2/uc?id=1ZSd_Y9xnBtL_nSUjMmIEePklriAS-Il7&export=download"
                        className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </Layout>
    );
}

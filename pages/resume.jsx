import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';

export default function Resume() {
    return (
        <Layout title="Resume | Edi Kurniawan">
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Resume
            </h1>
            <br />
            <div className="flex items-center justify-center border-2 border-dark dark:border-light">
                <iframe
                    src="https://drive.google.com/file/d/1oqiuG4r7bQ-4e3an3tOu_yTY1Sfe7PRL/preview"
                    className="w-full h-[57vh]"
                    allow="autoplay"></iframe>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-5 space-x-6 font-mono text-base font-medium md:justify-start md:text-lg">
                    <a
                        href="https://drive.google.com/file/d/1oqiuG4r7bQ-4e3an3tOu_yTY1Sfe7PRL/view?usp=sharing"
                        className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </Layout>
    );
}

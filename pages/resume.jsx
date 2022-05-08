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
            <div className="flex items-center justify-center border-2 border-dark dark:border-light">
                <iframe
                    src="https://onedrive.live.com/embed?cid=4A2DEB52E0975AE3&resid=4A2DEB52E0975AE3%218634&authkey=AFRY4O_s8MDVaCw&em=2"
                    className="w-full h-[57vh]"></iframe>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-5 space-x-6 font-mono text-base font-medium md:justify-start md:text-lg">
                    <a
                        href="https://public.bl.files.1drv.com/y4mFEuBh8QzEThmLs7KIgVnNND3FDxWnCyQ-XZCqEwrJb2cGHZn5WtGzO2NfjE4dRpkeUp6VildHlBUikGzrtPcpwhmy5Zr_s_PqoTvsA_9sO40ySyJ6ExjXJDuATKKlXCkg5rtQxbEz-1lFNJnYVsmlviebRvZdyNTM75eS6f9n6nyoFH3v1lFe-xbSrsTapEJHoSy6RUu_50-V7N3CKo7ms5BVY6Yp71T8wlhTzUqm0s"
                        className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </Layout>
    );
}

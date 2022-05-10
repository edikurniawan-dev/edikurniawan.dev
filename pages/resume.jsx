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
                    src="https://onedrive.live.com/embed?cid=4A2DEB52E0975AE3&resid=4A2DEB52E0975AE3%218634&authkey=AFRY4O_s8MDVaCw&em=2"
                    className="w-full h-[57vh]"></iframe>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center pt-5 space-x-6 font-mono text-base font-medium md:justify-start md:text-lg">
                    <a
                        href="https://public.bl.files.1drv.com/y4mEwi7nPXGTqgo5-h8ylGu5szFwqTP9gZ5MO7AhTZWTI5UixFXlVqWxI4Z040vrKjnu9m023iOBWUz5Frjai71vidi29hY147byOAsrGqeoMs9GYR2Ciz7hIfRnDr0n1crqXoj_UQFdGVi5UYMmnloPHwXNnZ6PVREBK9_FEYC-DglWllACJ5Aky76WTowarLFrKizV3y6TmXaIrw2NeBv5YAIbOSBdqRc4m2tfxbqH6g"
                        className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </Layout>
    );
}

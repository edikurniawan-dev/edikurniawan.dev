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
                        href="https://doc-0c-b8-docs.googleusercontent.com/docs/securesc/e3fc7ttrv1mkn3annl749rd8vi6cl0t7/3tm25qu7baolmdj41kutdq8j67blmmeb/1652244750000/11239491660057031462/11239491660057031462/1oqiuG4r7bQ-4e3an3tOu_yTY1Sfe7PRL?e=download&ax=ACxEAsakAh4ldQt2TqMP0wj1mCDhOyuQhfMtvzyw4_jr81PTfnLZD45LyTLLY14aNQ82LhhipUzWpsna3ZwibRnQy4c6OKk4W9JqWOzO7j5do5TfbiNMU5s-GV6XZmawFQN23iC6ZVAjVBhUbgo1Q1UeHExxRy7hOlhiI39RiOwteVNqIf4SMrOnVPM6LIMAzN2UZrd2rYUamIdSnHgX7Nqm2lJGSnIxTD6C9hwqqiy02m_8bpQCNEP4_jCIWFEaHF3tyVA9hdNnyYIZnP6KEno0cWkeDSD3LwAc0oHB-HlAYKiVOvhsSKvxHLZRt1dmnDB4lJxHk4FHpTsrpRZjfamBLpXgXFz9vvJPRUVuuryQyObJc-XUcGG2-65__sVw_em0fjBCIu17hASf5nPXyAwyeHlY8xwI4quAaWn6skh_naf-MAGVsbbtFgdPpb599RjDO0Hi0S7UrsI4wjvV71rlZtCoVmwX7M1T96Z0lI303rlxqq1uJ15THalr4tPbzlaChESQZmmSlX2Y-aam6Z0o0EcSlyHiufqsEzh58zrhlWsq_FmIAY7KaHOuRH2J0ID6649dubfmp6eatRMiSeShjhEoIS-iApmzTfw8IRuVYLGcsTK7apzOpoUoeSMi6dL1qr_jv0Qf-94SRI07wFCnmQIUefZaMtstIGTUg-DaBwPbADLwFxkm_DuYGVlYw1msiU80kPSGm9_GmDiWxSXflJ30aX02beLNrSiatxQ0_gBW-QDF0HLLWL5h6wLgPe7u0S1to7kzvN8hSycKpq8k&authuser=0&nonce=b341v4pe20o8e&user=11239491660057031462&hash=iprqhvt6plppnnvojnnbf9kdufehm635"
                        className="download-resume">
                        <FontAwesomeIcon icon={faDownload} />
                        &nbsp; Resume
                    </a>
                </div>
            </div>
        </Layout>
    );
}

import Head from 'next/head';
import Navbar from '../components/navbar';
import ImageLoader from '../src/ImageLoader';

export default function Experience() {
    return (
        <div className="">
            <Head>
                <title>Edi Kurniawan | Web Developer</title>
                <meta
                    name="description"
                    content="Edi Kurniawan is a web developer based in Indonesia. He has a passion for building websites and applications that are user-friendly and responsive."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <Navbar />
                experience
            </main>
        </div>
    );
}

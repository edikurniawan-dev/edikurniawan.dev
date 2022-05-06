import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ImageLoader from '../src/ImageLoader';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Edi Kurniawan | Web Developer</title>
                <meta
                    name="description"
                    content="Edi Kurniawan is a web developer based in Indonesia. He has a passion for building websites and applications that are user-friendly and responsive."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Under Development</h1>
            </main>
        </div>
    );
}

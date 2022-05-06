import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Edi Kurniawan | Web Developer</title>
                <meta
                    name="description"
                    content="Edi Kurniawan is a web developer based in Indonesia. He specializes in building modern web applications with React and Next.js."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Under Development</h1>
            </main>
        </div>
    );
}

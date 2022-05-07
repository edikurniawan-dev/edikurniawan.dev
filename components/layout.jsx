import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout({ title, description, keywords, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col min-h-screen bg-light dark:bg-dark">
                <div className="flex flex-col h-full justify-between">
                    <div className="">
                        <div className="fixed inset-x-0 bottom-0 z-50 bg-black border-t-2 md:sticky md:top-0 border-light md:border-none">
                            <Navbar />
                        </div>
                        {children}
                    </div>
                    <div className="pt-8 pb-16 md:pt-16 md:pb-0">
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

Layout.defaultProps = {
    title: 'Edi Kurniawan | Web Developer',
    description:
        'Edi Kurniawan is a web developer based in Indonesia. He has a passion for building websites and applications that are user-friendly and responsive.',
    keywords: 'web developer, programmer, react, javascript',
};

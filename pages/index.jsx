import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ImageLoader from '../src/ImageLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
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

            <main className="flex flex-col min-h-screen">
                <div
                    className="flex flex-col justify-between"
                    style={{ height: '100vh' }}>
                    <div className="">
                        <div className="fixed inset-x-0 bottom-0 z-50 bg-black border-t-2 md:sticky md:top-0 border-light md:border-none">
                            <Navbar />
                        </div>
                        <div className="px-0 mx-6 md:container md:mx-auto md:px-8 lg:px-12 xl:px-16">
                            <h1 className="text-red-600 text-center">
                                Under Development
                            </h1>
                        </div>
                    </div>
                    <div className="pt-8 pb-16 md:pt-16 md:pb-0">
                        <div className=""></div>
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faAddressCard} />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

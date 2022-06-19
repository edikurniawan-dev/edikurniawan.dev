import Layout from '../components/layout';
import Image from 'next/image';
import ImageLoader from '../src/ImageLoader';
import MyPhoto from '../images/under-construction.svg';

export default function Blog() {
    return (
        <Layout title="Blog | Edi Kurniawan">
            <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                Blog
            </h1>
            <br />

            {/* <div className="flex flex-col justify-center h-full -mt-10 md:-mt-0"></div> */}
            <div className="flex flex-col items-center mt-16">
                <div className="w-48 md:w-96">
                    <Image
                        loader={ImageLoader}
                        alt="Edi Kurniawan"
                        src={MyPhoto}
                        unoptimized
                        priority
                    />
                </div>
                <span className="mt-5 font-mono text-xl font-medium md:text-2xl md:mt-10 dark:text-light">
                    Under Construction
                </span>
            </div>
        </Layout>
    );
}

import Layout from '../components/layout';

export default function Custom404() {
    return (
        <Layout title="Not Found">
            <div className="flex flex-col items-center justify-center h-[70vh] pt-5 md:pt-10">
                <span className="font-bold text-7xl md:text-9xl text-gray">
                    404
                </span>
                <span className="text-base font-bold md:text-2xl text-dark dark:text-light">
                    Page not found.
                </span>
            </div>
        </Layout>
    );
}

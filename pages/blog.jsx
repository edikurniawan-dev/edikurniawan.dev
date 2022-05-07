import Layout from '../components/layout';
import ExperienceCard from '../components/experiencecard';

export default function Experience() {
    return (
        <Layout>
            <main className="flex flex-col pt-5 md:pt-10">
                <h1 className="font-mono text-2xl font-bold underline md:text-3xl text-dark dark:text-light">
                    Blog
                </h1>
                <br />

                {/* <div className="flex flex-col justify-center h-full -mt-10 md:-mt-0"></div> */}
                <div className="flex justify-center font-mono text-4xl font-bold dark:text-light">
                    soon..
                </div>
            </main>
        </Layout>
    );
}

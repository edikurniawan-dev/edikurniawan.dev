export default function ExperienceCard({ place, padding, companyName, during, task, number }) {
    return (
        <div className="flex flex-col items-center lg:flex-row">
            <div className={place}>
                <div className={padding}>
                    <div className="p-6 bg-white dark:bg-light">
                        <h3 className="font-mono text-xl font-bold text-dark">{companyName}</h3>
                        <p className="mb-2 font-mono text-lg font-bold text-dark">{during}</p>
                        <div className="border border-dark bg-dark"></div>
                        <p className="mt-3 font-sans tracking-wider text-dark">{task}</p>
                    </div>
                </div>
            </div>
            <div className="absolute flex items-center justify-center text-lg font-bold text-white transform -translate-x-1/2 -translate-y-6 border-2 bg-dark dark:bg-light dark:text-dark w-9 h-9 left-1/2 lg:translate-y-0 border-dark">
                {number}
            </div>
        </div>
    );
}

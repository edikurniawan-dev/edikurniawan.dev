import React from 'react';

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen font-mono">
            <span className="font-bold text-9xl text-gray">404</span>
            <span className="text-2xl font-bold text-dark dark:text-light">
                Page not found.
            </span>
        </main>
    );
};

export default NotFound;

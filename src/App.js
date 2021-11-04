import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-black md:sticky md:top-0 z-50 fixed bottom-0 inset-x-0">
                <Navbar />
            </div>
            <div className="md:container mx-6 md:mx-auto px-0 md:px-8 lg:px-12 xl:px-16 pb-24 md:pb-16">
                <Router />
            </div>
        </div>
    );
};

export default App;

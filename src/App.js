import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';

import './tailwind.css';

const App = () => {
    return (
        <div className="flex flex-col h-full bg-light">
            <div className="bg-black md:sticky md:top-0 z-50 fixed bottom-0 inset-x-0">
                <Navbar />
            </div>
            <div className="md:container mx-6 md:mx-auto flex-grow px-0 md:px-16">
                <Router />
            </div>
            <div className="mb-32 md:mb-0"></div>
        </div>
    );
};

export default App;

import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './tailwind.css';

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="container mx-auto max-w-6xl">
                <Navbar />
            </div>
            <div className="mb-auto container mx-auto max-w-6xl">
                <Router />
            </div>
            <div className="w-full bg-gray-50">
                <Footer />
            </div>
        </div>
    );
};

export default App;

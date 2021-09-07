import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './tailwind.css';

const App = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-6xl">
                <Navbar />
                <Router />
            </div>
            <div className="w-full bg-gray-100">
                <Footer />
            </div>
        </div>
    );
};

export default App;

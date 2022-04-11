import React from 'react';
import Router from './router/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="flex flex-col">
            <div className="fixed inset-x-0 bottom-0 z-50 bg-black border-t-2 md:sticky md:top-0 border-light md:border-none">
                <Navbar />
            </div>
            <div className="px-0 mx-6 md:container md:mx-auto md:px-8 lg:px-12 xl:px-16">
                <Router />
            </div>
            <div className="pt-8 pb-16 md:pt-16 md:pb-0">
                <Footer />
            </div>
        </div>
    );
};

export default App;

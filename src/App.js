import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';

import './tailwind.css';

const App = () => {
    return (
        <div className="container mx-auto flex-col px-16">
            <Navbar />
            <Router />
        </div>
    );
};

export default App;

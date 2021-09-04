import Router from './router/Index';
import React from 'react';
import Navbar from './components/Navbar';

import './tailwind.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Router />
        </div>
    );
};

export default App;

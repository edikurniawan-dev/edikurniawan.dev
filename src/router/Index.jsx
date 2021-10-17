import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skill from '../pages/Skill';
import Experience from '../pages/Experience';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/skill">
                <Skill />
            </Route>
            <Route exact path="/experience">
                <Experience />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/resume">
                <Resume />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </Switch>
    );
};

export default Router;

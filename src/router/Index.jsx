import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/About-Me';
import Skill from '../pages/Skill';
import Portfolio from '../pages/Portfolio';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about-me">
                <AboutMe />
            </Route>
            <Route exact path="/skill">
                <Skill />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
        </Switch>
    );
};

export default Router;

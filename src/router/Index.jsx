import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
        </Switch>
    );
};

export default Router;

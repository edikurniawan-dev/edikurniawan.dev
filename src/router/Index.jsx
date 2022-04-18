import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Experience from '../pages/Experience';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import ScrollToTop from '../components/ScrollToTop';

const Router = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/">
                    <Home />
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
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    );
};

export default Router;

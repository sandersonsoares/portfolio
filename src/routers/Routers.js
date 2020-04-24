import React from 'react';
import { Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Projects } from '../pages';

export function Routers() {
    return (
        <Router>
            <div className="text-center">
                <Image src={'./assets/images/logo.svg'} fluid className="text-center pt-4" />
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
    );
}
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Conditions from './components/Conditions';
import Soumission from './components/Soumission';
import TestForm from './components/TestForm';
import Test from './components/Test';
import Basic from './components/Formika';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Conditions} />
                <Route path="/Soumission" component={Soumission} />
                <Route path="/TestForm" component={TestForm} />
                <Route path="/Test" component={Test} />
                <Route path="/Formika" component={Basic} />
                {/* <Route component={Erreur} /> */}
            </Switch>
        </Router>
    );
};

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Conditions from './components/Conditions';
import Soumission from './components/Soumission';
import TestForm from './components/TestForm';
import Test from './components/Test';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Conditions} />
                <Route path="/soumission" component={Soumission} />
                <Route path="/TestForm" component={TestForm} />
                <Route path="/Test" component={Test} />          
                {/* <Route component={Erreur} /> */}
            </Switch>
        </Router>
    );
};

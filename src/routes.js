import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Conditions from './components/Conditions';
import Central from './components/Central';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Conditions} />
                <Route path="/Soumission" component={Central} />
                {/* <Route component={Erreur} /> */}
            </Switch>
        </Router>
    );
};

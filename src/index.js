import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/index.css';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';
import WasteMap from './WasteMap';

ReactDOM.render(
    <Router>

        <Switch>

        <Route exact path="/" name="homepage" component={Homepage} />
        <Route path="/wastemap" name="wastemap" component={WasteMap} />

        </Switch>

    </Router>

, document.getElementById('root'));

serviceWorker.unregister();

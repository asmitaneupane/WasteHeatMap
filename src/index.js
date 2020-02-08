import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.min.css';
import Login from './login';
import Homepage from './Homepage';

import WasteMap from './WasteMap';
import Register from './register';
import Settings from './Settings';

import User from './user';
import Ecommercesite from './ecommercesite';
import Addwaste from './Addwaste';
import Getlocation from './Getlocation';
const hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Homepage />
        <Switch>
            <Route path="/login" name="login" component={Login} />
            <Route path="/wastemap" name="wastemap" component={WasteMap} />
            <Route path="/ecommercesite" name="ecommercesite" component={Ecommercesite} />
            <Route path="/login" name="login" component={Login} />
            <Route path="/register" name="register" component={Register} />
            <Route path="/settings" name="settings" component={Settings} />
            <Route path="/user" name="user" component={User} />
            <Route path="/addwaste" name="addwaste" component={Addwaste} />
            <Route path="/getlocation" name="getlocation" component={Getlocation} />
            <Route exact path="/" name="wastemap" component={WasteMap} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
serviceWorker.unregister();

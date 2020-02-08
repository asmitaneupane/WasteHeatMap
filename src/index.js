import React from 'react';
import ReactDOM from 'react-dom';
import WasteMap from './WasteMap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import form from './form';
import './css/bootstrap.min.css';
import Login from './login';
import Homepage from './Homepage';
import Register from './register';
// import Menu from './Menu';
import Settings from './Settings';
import User from './user';
import Ecommercesite from './ecommercesite';

ReactDOM.render(
    <div>
        <Router>
            <Homepage />

            <Switch>
                <Route exact path="/" name="wastemap" component={WasteMap} />
                <Route exact path="/wastemap" name="wastemap" component={WasteMap} />
                <Route path="/ecommercesite" name="ecommercesite" component={Ecommercesite} />
                <Route path="/login" name="login" component={Login} />
                <Route path="/register" name="register" component={Register} />
                <Route path="/settings" name="settings" component={Settings} />
                <Route path="/user" name="user" component={User} />


            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();

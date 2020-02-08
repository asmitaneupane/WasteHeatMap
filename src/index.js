import React from 'react';
import ReactDOM from 'react-dom';
import WasteMap from './WasteMap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.min.css';
import Login from './login';
import Homepage from './Homepage';
import Register from './register';
import Settings from './Settings';
import User from './user';
import Ecommercesite from './ecommercesite';
import Addwaste from './Addwaste';
import Getlocation from './Getlocation';
import Welcome from './Welcome';

ReactDOM.render(
    <div>
        <Router>
            <Homepage />

            <Switch>
                <Route exact path="/" name="welcome" component={Welcome} />
                <Route path="/login" name="login" component={Login} />
                <Route path="/wastemap" name="wastemap" component={WasteMap} />
                <Route path="/ecommercesite" name="ecommercesite" component={Ecommercesite} />
                <Route path="/login" name="login" component={Login} />
                <Route path="/register" name="register" component={Register} />
                <Route path="/settings" name="settings" component={Settings} />
                <Route path="/user" name="user" component={User} />
                <Route path="/addwaste" name="addwaste" component={Addwaste} />
                <Route path="/getlocation" name="getlocation" component={Getlocation} />


            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();

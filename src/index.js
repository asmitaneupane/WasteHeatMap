import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import WasteMap from './WasteMap';
import Homepage from './Homepage';
import Menu from './Homepage';
import UserProfile from './UserProfile';
import Form from './Form';
import register from './register';

ReactDOM.render(
    <Router>
        < Menu />
        <Switch>
        
        <Route exact path="/" name="homepage" component={Homepage} />
        <Route path="/wastemap" name="wastemap" component={WasteMap} />
        <Route path="/userprofile" name="userprofile" component={UserProfile}/>
        <Route path="/form" name="Form" component={Form} />
        <Route path="/register" name="register" component={register}/>
        

        </Switch>

    </Router>

, document.getElementById('root'));

serviceWorker.unregister();

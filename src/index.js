import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
        <Route exact path="/" name="homepage" component={Homepage} />
        </Switch>
    </Router>
, document.getElementById('root'));

serviceWorker.unregister();

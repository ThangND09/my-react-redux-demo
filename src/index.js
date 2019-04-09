import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Switch, Route, browserHistory } from 'react-router-dom';
import { firebaseApp } from './firebase';

import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import App from './App';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log("user has singed in", user);
    } else {
        console.log("user has singed out");
    }
})

ReactDOM.render( 
    <Router history={createBrowserHistory()}>
        <Route exact={true} path="/" component={SingIn}/>
        <Route path="/app" component={App}/>
        <Route path="/singup" component={SingUp}/>
    </Router>,
    
    document.getElementById('root')
);
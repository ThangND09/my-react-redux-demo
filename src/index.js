import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './history';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './App';
import App2 from './App2';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        history.push('/app');
    } else {
        history.replace('/signin');    
    }
})

ReactDOM.render( 
    <Router path="/" history={history}>
        <Route path="/app" component={App}/>
        <Route path="/app2" component={App2}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
    </Router>,
    
    document.getElementById('root')
);
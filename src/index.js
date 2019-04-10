import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './history';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';
import User from './components/User';
import TaskCreate from './components/TaskCreate';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addUser } from './actions/user';
import user from './reducers/user';

const store = createStore(user);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log("user loged in",user);
        store.dispatch(addUser(user.email, user.photoURL));
        console.log("after dispatch:", user.photoURL);
    } else {
        console.log("user not log in",user);
        history.replace('/signin'); 
    }
})

ReactDOM.render( 
    <Provider store={store}>
        <Router path="/" history={history}>
            <Route path="/app" component={App}/>
            <Route path="/create_task" component={TaskCreate}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/user" component={User}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
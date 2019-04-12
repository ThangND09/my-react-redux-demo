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
//import user from './reducers/user';
import Navigator from './components/Navigator';
import reducer from './reducers/combineReducers';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        store.dispatch(addUser(user.email, user.photoURL));
    } else {
        history.replace('/signin'); 
    }
})


ReactDOM.render( 
    <Provider store={store}>
        <Router path="/" history={history}>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>

            <Route path="/app" component={() => <Navigator Component={App}></Navigator>} />
            {/* <Route path="/app" component={App} /> */}
            <Route path="/create_task" component={() => <Navigator Component={TaskCreate}></Navigator>} />
            <Route path="/user" component={() => <Navigator Component={User}></Navigator>} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './history';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addUser } from './actions/user';
import App from './components/App';
import reducer from './reducers/combineReducers';
import TaskDetail from './components/TaskDetail';

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
            <Route path="/app" component={() => <App Component={TaskList}></App>} />
            <Route path="/create_task" component={() => <App Component={TaskCreate}></App>} />
            <Route path="/task_detail" component={() => <App Component={TaskDetail}></App>} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCReBFfUqa_sVtrYleNqC1tBhHSJ6RBr9g",
    authDomain: "my-react-redux-demo.firebaseapp.com",
    databaseURL: "https://my-react-redux-demo.firebaseio.com",
    projectId: "my-react-redux-demo",
    storageBucket: "my-react-redux-demo.appspot.com",
    messagingSenderId: "292448557386"
};

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
export const usersRef = firebase.database().ref('users');
export const completeTaskRef = firebase.database().ref('completeTaskRef');
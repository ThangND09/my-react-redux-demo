import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import history from '../history';
import { usersRef } from '../firebase';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    signUp() {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebaseApp.auth().currentUser;
                user.updateProfile({
                    photoURL: "../avatar/def-avatar.jpg"
                }).then(function() {
                    usersRef.push({email: email, photoURL: "../avatar/def-avatar.jpg"})
                    .then(
                        history.push('/signin')
                    )
                }).catch(function(error) {
                    this.setState({error: error.message});
                });
            })
            .catch(
                error => {
                    this.setState({error: error.message});
                }
            )
    }

    render() {
        return(
            <div style={{marginLeft: 50, marginTop: 20}}>
                <h2>Sign Up</h2>
                <div className="form-inline" style={{marginTop: 10}}>
                    
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="email" style={{marginRight:5}}
                            onChange={event => this.setState({email: event.target.value})}/>

                        <input className="form-control" type="password" placeholder="password" style={{marginRight:5}}
                            onChange={event => this.setState({password: event.target.value})}/>
                        
                        <button className="btn btn-primary" type="button" onClick={() => this.signUp()}>
                            Sign Up
                        </button>
                    </div>
                </div>

                <div style={{marginTop: 10}}><font color="red">{this.state.error}</font></div>
                <div style={{marginTop: 10}}><Link to={'/signin'}>Sign In if you already have an accout</Link></div>
            </div>
        )
    }
}

export default SignUp;
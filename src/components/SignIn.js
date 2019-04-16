import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import history from '../history';

class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    signIn() {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/app');
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
                <h2>Sign In</h2>
                <div className="form-inline" style={{marginTop: 10}}>
                    <div className="form-group" >
                        <input className="form-control" type="text" placeholder="email" style={{marginRight:5}}
                            onChange={event => this.setState({email: event.target.value})}/>

                        <input className="form-control" type="password" placeholder="password" style={{marginRight:5}}
                            onChange={event => this.setState({password: event.target.value})}/>
                        
                        <button className="btn btn-primary" type="button" onClick={() => this.signIn()}>
                            Sign In
                        </button>
                    </div>
                </div>
                <div style={{marginTop: 10}}>{this.state.error}</div>
                <div style={{marginTop: 10}}><Link to={'/signup'}> Sign up instead</Link></div>
            </div>
        )
    }
}

export default SignIn;
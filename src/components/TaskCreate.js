import React, { Component } from 'react';
import avatar1 from '../assets/avatar-1.jpg';
import { firebaseApp } from '../firebase';

class TaskCreate extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div style={{marginTop: 20}} >
                <div class="row">
                    <div class="col-sm-3">
                        <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCreate;
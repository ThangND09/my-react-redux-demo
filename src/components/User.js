import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import avatar1 from '../assets/avatar-1.jpg';

class User extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div class="col-sm-3" style={{marginTop: 20}} >
                {/* <div class="col-lg-4 order-lg-1 text-center" style={{margin: "auto"}}>
                    <img src={avatar1} class="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                    <h6 class="mt-2">Upload a different photo</h6>
                    <div class="custom-file mb-3">
                        <input type="file" class="custom-file-input" id="customFile" name="filename"/>
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                </div> */}


                <div class="col-lg-4 order-lg-1 text-center" style={{margin: "auto"}}>
                    <img src="../avatar/def-avatar.jpg" class="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                    <h6 class="mt-2">Upload a different photo</h6>
                    <div class="custom-file">
                        <input type="file" />
                    </div>
                </div>

                
                <div class="row">
                    <div style={{margin: "auto", marginTop: 30}}>
                        <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
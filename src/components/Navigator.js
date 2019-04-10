import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAvatar } from '../actions/user';

class Navigator extends Component{

    constructor(props) {
        super(props);
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    changeAvatar(photoURL){
        photoURL = "../avatar/avatar-3.jpg";
        this.props.changeAvatar("../avatar/avatar-3.jpg");
        const user = firebaseApp.auth().currentUser;
        user.updateProfile({
            photoURL: photoURL
        }).then(function() {
        }).catch(function(error) {
        });
    }

    render() {
        
        const App = this.props.Component.App;
        return(
            <div style={{marginTop: 20}} >
                <div class="row">
                    <div class="col-sm-3">
                        <div class="col-lg-4 order-lg-1 text-center" style={{margin: "auto"}}>
                            <img src={this.props.photoURL} class="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                            <h6 class="mt-2">Upload a different photo</h6>
                            {/* <div class="custom-file">
                                <input type="file" onChange={event => this.changeAvatar(event.target.value)}/>
                            </div> */}
                            <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Choose your image
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <button type="button" class="btn btn-warning" style={{marginTop: 10}}>Warning</button>
                        </div>
                        <div class="row">
                            <div style={{margin: "auto", marginTop: 30}}>
                                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
                            </div>
                        </div>
                    </div>
    
                    <App/>
                </div>   
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeAvatar}, dispatch);
}

function mapStatetoProps(state) {
    return {
        email: state.email,
        photoURL: state.photoURL
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (Navigator);
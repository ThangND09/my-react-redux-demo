import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAvatar } from '../actions/user';
import { Link } from 'react-router-dom';
import { usersRef } from '../firebase';

class Navigator extends Component{

    constructor(props) {
        super(props);
        this.state = {
            photoURL: ""
        }
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    changeAvatar(){
        const user = firebaseApp.auth().currentUser;
        user.updateProfile({
            photoURL: this.state.photoURL
        }).then(() => {
            const query = usersRef.orderByChild('email').equalTo(user.email);
            query.once("child_added", (snapshot) => {
                snapshot.ref.update({ photoURL: this.state.photoURL })
            });
        }).catch(function(error) {
        });

        this.props.changeAvatar(this.state.photoURL);
    }

    selectAvatar(photoURL){
        if (photoURL !== "def") {
            document.getElementById("avatar").src = photoURL;
            this.setState({photoURL: photoURL});
        }
    }

    render() {
        console.log("rerender", this.props.photoURL);
        const Component = this.props.Component;
        return(
            <div style={{marginTop: 20}} >
                <div class="row">
                    <div class="col-sm-3">
                        <div class="col-lg-4 order-lg-1 text-center" style={{margin: "auto"}}>
                            <img src={this.props.photoURL} class="mx-auto img-fluid img-circle d-block" id="avatar" alt="avatar"/>
                            <h6 class="mt-2">Choose a photo</h6>
                            <select class="selectpicker text-center" onChange={event => { this.selectAvatar(event.target.value) }}>
                                    <option value="def">Choose your avatar</option>
                                    <option value="../avatar/avatar-1.jpg">Image 1</option>
                                    <option value="../avatar/avatar-2.jpg">Image 2</option>
                                    <option value="../avatar/avatar-3.jpg">Image 3</option>
                                    <option value="../avatar/avatar-4.jpg">Image 4</option>
                                    <option value="../avatar/avatar-5.jpg">Image 5</option>
                            </select>
                            <button type="button" class="btn btn-warning" style={{marginTop: 10}} onClick = { () => this.changeAvatar()}>Save</button>
                        </div>
                        <hr></hr>
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action bg-light text-center"><Link to="/">Add new task</Link></a>
                        </div>
                        <div class="row">
                            <div style={{margin: "auto", marginTop: 30}}>
                                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <Component/>
                    </div>
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
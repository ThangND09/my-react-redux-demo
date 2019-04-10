import React, { Component } from 'react';
import avatar1 from '../assets/avatar-1.jpg';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { changeAvatar } from '../actions/user';
import { bindActionCreators } from 'redux';

class App extends Component {

    constructor(props) {
        super(props);
    }

    signOut() {
        firebaseApp.auth().signOut();
    }

    changeAvatar(photoURL){
        
        //console.log("Avatar after change", photoURL);
        photoURL = "../avatar/avatar-3.jpg";

        this.props.changeAvatar("../avatar/avatar-3.jpg");

        const user = firebaseApp.auth().currentUser;
        user.updateProfile({
            photoURL: photoURL
        }).then(function() {
        }).catch(function(error) {
        });

        console.log("Avatar befor change", user);
    }

    render(){
        console.log("this.propssssssss",this.props.photoURL);
        return(
            <div style={{marginTop: 20}} >
                <div class="row">
                    <div class="col-sm-3">
                        <div class="col-lg-4 order-lg-1 text-center" style={{margin: "auto"}}>
                        <img src={this.props.photoURL} class="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                        <h6 class="mt-2">Upload a different photo</h6>
                        <div class="custom-file">
                            <input type="file" onChange={event => this.changeAvatar(event.target.value)}/>
                        </div>
                    </div>

                    
                    <div class="row">
                        <div style={{margin: "auto", marginTop: 30}}>
                            <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
                        </div>
                    </div>
                        {/* <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button> */}
                    </div>
                    <div class="col-sm-3">
                        
                        <div class="card-header">Header</div>
                        
                        
                        <div class="card border-dark " >
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="task-list-table" style={{display:"inline-block"}}>
                                    <a href="#!"><img class="img-fluid img-radius" src={this.props.photoURL} alt="1" /></a>
                                </div>
                                <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                                    
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-edit"></i> Edit task</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-close-line"></i> Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-dark " >
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="task-list-table" style={{display:"inline-block"}}>
                                    <a href="#!"><img class="img-fluid img-radius" src={avatar1} alt="1" /></a>
                                </div>
                                <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                                    
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-edit"></i> Edit task</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-close-line"></i> Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-dark" >
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="task-list-table" style={{display:"inline-block"}}>
                                    <a href="#!"><img class="img-fluid img-radius" src={avatar1} alt="1" /></a>
                                </div>
                                <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                                    
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-edit"></i> Edit task</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-close-line"></i> Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card-header">Header</div>
                        <div class="card border-dark " >
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="task-list-table" style={{display:"inline-block"}}>
                                    <a href="#!"><img class="img-fluid img-radius" src={avatar1} alt="1" /></a>
                                </div>
                                <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                                    
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-edit"></i> Edit task</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-close-line"></i> Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card-header">Header</div>
                        <div class="card border-dark " >
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer">
                                <div class="task-list-table" style={{display:"inline-block"}}>
                                    <a href="#!"><img class="img-fluid img-radius" src={avatar1} alt="1" /></a>
                                </div>
                                <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                                    
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect active" href="#!">Open</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">On hold</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Resolved</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!">Closed</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                                        <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut" x-placement="bottom-start" 
                                        style={{position: "absolute", transform: "translate3d(0, 26, 0)", top: 0, left: 0, willChange: "transform"}}>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-ui-edit"></i> Edit task</a>
                                            <a class="dropdown-item waves-light waves-effect" href="#!"><i class="icofont icofont-close-line"></i> Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStatetoProps, mapDispatchToProps) (App);
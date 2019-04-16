import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { taskRef, completeTaskRef, firebaseApp } from '../firebase';

class TaskItem extends Component {

    deleteTask(){
        const {detail, owner, status, title, serverKey} = this.props.task;
        taskRef.child(serverKey).remove();
        completeTaskRef.push({detail, owner, status, title});
    }

    changeState(){
        const {serverKey} = this.props.task;

        firebaseApp.database().ref().child('/tasks/' + serverKey)
        .update({ status: "delete" });
    }

    render() {
        const {detail, owner, status, title, serverKey} = this.props.task;

        return(
            <div class="card border-dark " >
                <div class="card-body text-dark">
                    <h5 class="card-title">
                    {/* <Link to={{ pathname: '/task_detail', state: { serverKey: serverKey} }}>Title</Link> */}
                    

                    <Link to={`/task_detail?serverKey=${serverKey}`} >Detail</Link>

                    
                    </h5>
                    
                    <p class="card-text">{title}</p>
                </div>
                <div class="card-footer">
                    <div class="task-list-table" style={{display:"inline-block"}}>
                        <a href="#!"><img class="img-fluid img-radius" src={this.props.photoURL} alt="1" /></a>
                    </div>
                    <div class="task-board" style={{display:"inline-block", float:"right", marginTop: 50}}>
                        
                        <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                            <button class="btn btn-default btn-mini waves-light b-none txt-muted" type="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.changeState()}>Next >></button>
                        </div>

                        <div class="dropdown-secondary dropdown" style={{display:"inline-block", margin:5}}>
                            <button class="btn btn-danger btn-mini waves-light b-none txt-muted" type="button" aria-haspopup="true" aria-expanded="false" onClick={() => this.deleteTask()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        email: state.user.email,
        photoURL: state.user.photoURL
    }
  }
  
export default connect(mapStateToProps, null)(TaskItem);
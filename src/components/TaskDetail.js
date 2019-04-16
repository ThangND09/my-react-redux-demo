import React, { Component } from 'react';
import { taskRef } from '../firebase';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import history from '../history';


class User extends Component{
    render(){
        const { email} = this.props.user;
        const defaultUser = this.props.defaultUser;

        if (defaultUser.email === email) {
            return(
                <option selected value={email}>{email}</option>
            )
        } else {
            return(
                <option value={email}>{email}</option>
            )
        }
    }
}

class Status extends Component{
    render(){
        const { defaultStatus, status} = this.props;
        if (defaultStatus === status) {
            return(
                <option selected value={status}> {status}</option>
            )
        } else {
            return(
                <option value={status}> {status}</option>
            )
        }
        
    }
}

class TaskDetail extends Component {

    constructor(props){
        super(props);
        this.props.userList.users = [];
        this.state = {
            serverKey : '',
            detail : '',
            owner : '',
            status : '',
            title : '',
            status_list: ['todo', 'inprogress', 'review']
        };
    }

    componentDidMount() {
        const url_str = window.location.href;
        const url = new URL(url_str);
        const serverKey = url.searchParams.get("serverKey");

        taskRef.child(serverKey)
        .once('value')
        .then( (snapshot) => {
                var value = snapshot.val();
                console.log("thanggggggggggggggggg",value.detail);
                this.setState({
                    serverKey: serverKey,
                    detail: value.detail,
                    owner : value.owner,
                    status : value.status,
                    title : value.title
                });
              }
        )

        
        
    }

    updateTask() {
        //const id = Math.random(); 
        const title = document.getElementById("title").value;
        const detail = document.getElementById("description").value;
        const owner = document.getElementById("owner");
        const status = document.getElementById("status");

        const strStatus = status.options[status.selectedIndex].text;
        const strUser = owner.options[owner.selectedIndex].text;
        const serverKey = this.state.serverKey;
    
        firebaseApp.database().ref().child('/tasks/' + serverKey)
        .update({
             detail,
             title,
             owner: strUser,
             status: strStatus
        }).then(() => {
            history.push("/app");
        });
    }

    render(){
        console.log("TaskCreate");
        return(
            <div class="col-sm-9">
                <form>
                    <h2 style={{color: "red" }}>Update task</h2>
                    <div class="form-row" style={{ marginTop: 20 }}>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Title" defaultValue={this.state.title}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Description</label>
                        <textarea class="form-control" rows="10" id="description" value={this.state.detail}></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputState">Status</label>
                        <select id="status" class="form-control" >
                            {
                                this.state.status_list.map( (status, index) => (
                                    <Status key={index} defaultStatus={this.state.status} status={status}/>
                                ))
                            }
                        </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputState">Choose person taking care this task</label>
                        <select id="owner" class="form-control" >
                            {
                                this.props.userList.users.map( (user, index) => (
                                    <User key={index} user={user} defaultUser={this.props.user} />
                                ))
                            }
                        </select>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.updateTask()} >Update Task</button>
                </form>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        userList: state.listAllUser,
        user: state.user
    }
}

export default connect(mapStatetoProps, null) (TaskDetail);
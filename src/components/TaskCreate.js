import React, { Component } from 'react';
import { taskRef } from '../firebase';
import history from '../history';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

class User extends Component{
    render(){
        const { email} = this.props.user;
        return(
            <option value={email}>{email}</option>
        )
    }
}

class TaskCreate extends Component {

    constructor(props){
        super(props);
        this.props.userList.users = [];
    }

    createTask(){
        //const id = Math.random(); 
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const owner = document.getElementById("owner");
        const status = "todo";

        var strUser = owner.options[owner.selectedIndex].text;

        taskRef.push({title: title, detail: description, owner: strUser, status: status});

        history.push("/app");
        
    }

    render(){
        console.log("TaskCreate");
        return(
            <div class="col-sm-9">
                <form>
                    <h2 style={{color: "red" }}>Create new task</h2>
                    <div class="form-row" style={{ marginTop: 20 }}>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Title"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Description</label>
                        <textarea class="form-control" rows="10" id="description" placeholder="Description"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="inputState">Choose person taking care this task</label>
                        <select id="owner" class="form-control" >
                            <option selected> Choose ...</option>
                            {
                                this.props.userList.users.map( (user, index) => (
                                    <User key={index} user={user} />
                                ))
                            }
                        </select>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.createTask()} >Create</button>
                </form>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        userList: state.listAllUser
    }
}

export default connect(mapStatetoProps, null) (TaskCreate);
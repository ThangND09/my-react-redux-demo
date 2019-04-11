import React, { Component } from 'react';
import { taskRef } from '../firebase';
import history from '../history';

class TaskCreate extends Component {

    createTask(){
        //const id = Math.random(); 
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const owner = document.getElementById("owner");

        var strUser = owner.options[owner.selectedIndex].text;

        taskRef.push({title: title, detail: description, owner: strUser});

        history.push("/app");
        
    }

    render(){
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
                        <select id="owner" class="form-control">
                            <option selected>Choose...</option>
                            <option value="nguyen@gmail.com">user1</option>
                            <option value="thang@gmail.com">user2</option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => this.createTask()} >Create</button>
                </form>
            </div>
        )
    }
}

export default TaskCreate;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';
import { bindActionCreators } from 'redux';
import { listAllTask } from '../actions/task'
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTask: [],
            inprogressTask: [],
            reviewTask: []
        };
    }

    componentDidMount() {
        taskRef.on("value", (snap) => {
            let todoTask = [];
            let inprogressTask = [];
            let reviewTask = [];

            snap.forEach(task => {
                const {detail, owner, status, title} = task.val();
                const serverKey = task.key;
                if(owner === this.props.email) {
                    if (status === 'todo') {
                        todoTask.push({detail, owner, status, title, serverKey})
                    } else if (status === 'inprogress') {
                        inprogressTask.push({detail, owner, status, title, serverKey})
                    } else if (status === 'review') {
                        reviewTask.push({detail, owner, status, title, serverKey})
                    }
                } 
            })
            this.props.listAllTask(todoTask, inprogressTask, reviewTask);
        })
    }

    render(){
        return(
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card-header">Todo</div>
                        {
                            this.props.todoTask.map((task) => {
                                return(
                                    <TaskItem key={task.serverKey} task={task}/>
                                )
                            })
                        }
                    </div>
                    <div class="col-sm-4">
                        <div class="card-header">Inprogress</div>
                        {
                            this.props.inprogressTask.map((task) => {
                                return(
                                    <TaskItem key={task.serverKey} task={task}/>
                                )
                            })
                        }
                    </div>
                    <div class="col-sm-4">
                        <div class="card-header">Review</div>
                        {
                            this.props.reviewTask.map((task) => {
                                return(
                                    <TaskItem key={task.serverKey} task={task}/>
                                )
                            })
                        }
                    </div>
                </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listAllTask}, dispatch);
}

function mapStatetoProps(state) {
    return {
        email: state.user.email,
        photoURL: state.user.photoURL,
        todoTask: state.task.todoTask,
        inprogressTask: state.task.inprogressTask,
        reviewTask: state.task.reviewTask
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (TaskList);
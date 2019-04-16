import { LIST_ALL_TASK } from '../constant';

const task = (state = { todoTask: [], inprogressTask: [], reviewTask: []}, action) => {
    let tasks = null;
    switch (action.type) {
        case LIST_ALL_TASK:
            tasks = { 
                todoTask: action.todoTask, 
                inprogressTask: action.inprogressTask,
                reviewTask: action.reviewTask
            }
            return tasks;
    
        default:
            return state;
    }
}

export default task;
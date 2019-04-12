import { LIST_ALL_TASK } from '../constant';

export const listAllTask = (todoTask = [], inprogressTask = [], reviewTask = []) => {
    const action = {
        type: LIST_ALL_TASK,
        todoTask,
        inprogressTask,
        reviewTask
    }

    return action;
}

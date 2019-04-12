import { combineReducers } from 'redux';
import user from './user';
import { listAllUser } from './user';
import task from './task';

export default combineReducers({
    user,
    listAllUser,
    task
})
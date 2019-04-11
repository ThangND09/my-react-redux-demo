import { combineReducers } from 'redux';
import user from './user';
import { listAllUser } from './user';

export default combineReducers({
    user,
    listAllUser
})
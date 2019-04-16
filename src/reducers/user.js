import { ADD_USER } from '../constant';
import { CHANGE_AVATAR } from '../constant';
import { LIST_ALL_USER } from '../constant';

const user = (state = {email:"", photoURL:""}, action) => {
    let user = null;
    switch (action.type) {
        case ADD_USER:
            user = {email : action.email, photoURL: action.photoURL};
            return user;
        
        case CHANGE_AVATAR:
            user = {email : state.email, photoURL: action.photoURL};
            return user;
    
        default:
            return state;
    }
}

export const listAllUser = (state = [], action) => {
    
    let users = null;
    switch (action.type) {
        case LIST_ALL_USER:
            users = action;
            return users;
    
        default:
            return state;
    }
}

export default user;
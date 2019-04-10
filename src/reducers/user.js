import { ADD_USER } from '../constant';
import { CHANGE_AVATAR } from '../constant';

const user = (state = {email:"", photoURL:""}, action) => {
    let email = null;
    switch (action.type) {
        case ADD_USER:
            email = {email : action.email, photoURL: action.photoURL};
            return email;
        
        case CHANGE_AVATAR:
            email = {email : state.email, photoURL: action.photoURL};
            console.log("after change avatar", email);
            return email;
    
        default:
            return state;
    }
}

export default user;
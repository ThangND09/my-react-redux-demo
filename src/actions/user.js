import { ADD_USER } from '../constant';
import { CHANGE_AVATAR } from '../constant';

export const addUser = (email, photoURL) => {
    const action = {
        type: ADD_USER,
        email,
        photoURL
    }

    console.log('Action in action:', action);
    return action;
}

export const changeAvatar = (photoURL) => {
    const action = {
        type: CHANGE_AVATAR,
        photoURL
    }
    return action;
}
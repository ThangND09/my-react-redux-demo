import { ADD_USER } from '../constant';
import { CHANGE_AVATAR } from '../constant';
import { LIST_ALL_USER } from '../constant';

export const addUser = (email, photoURL) => {
    const action = {
        type: ADD_USER,
        email,
        photoURL
    }

    return action;
}

export const changeAvatar = (photoURL) => {
    const action = {
        type: CHANGE_AVATAR,
        photoURL
    }
    return action;
}

export const listAllUser = (users) => {
    const action = {
        type: LIST_ALL_USER,
        users
    }
    return action;
}
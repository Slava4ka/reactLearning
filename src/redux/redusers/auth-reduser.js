import React from "react";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USERS_AVATAR = 'SET-USERS-AVATAR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    avatar: 'Login',
    isAuth: false,
    isFetching: true
};


const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }

        case SET_USERS_AVATAR: {
            return {...state, avatar: action.avatar}
        }

        default:
            return state

    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUsersAvatar = (avatar) => ({type: SET_USERS_AVATAR, avatar});

export default authReduser;
import React from "react";
import {userApi, profileAPI} from "../../api/api";

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

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const setUsersAvatar = (avatar) => ({type: SET_USERS_AVATAR, avatar});

export const authorization = () => {
    return (dispatch) => {
        userApi.authMe().then(data => {
            if (data.resultCode === 0) {
                console.log(data);
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
                profileAPI.getProfile(data.data.id).then(profileData => {
                    if (profileData.photos.small) {
                        dispatch(setUsersAvatar(<img src={profileData.photos.small} alt={"small avatar"}/>));
                    } else {
                        dispatch(setUsersAvatar(<img
                            src={'https://cs16planet.ru/images/content/avatars/avatar648.jpg'} alt={"small avatar"}/>));
                    }
                });
            } else {
                alert("Error of authentication\n" + "resultCode " + data.resultCode)
            }
        });
    }
};


export default authReduser;
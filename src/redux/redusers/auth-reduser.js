import React from "react";
import {userApi, profileAPI, authApi} from "../../api/api";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.data}
        }

        case SET_USERS_AVATAR: {
            return {...state, avatar: action.avatar}
        }

        default:
            return state

    }
};

const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
const setUsersAvatar = (avatar) => ({type: SET_USERS_AVATAR, avatar});

export const authorization = () => {
    return (dispatch) => {
        userApi.authMe().then(data => {
            if (data.resultCode === 0) {

                console.log(data);
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
                profileAPI.getProfile(data.data.id).then(profileData => {
                    if (profileData.photos.small) {
                        dispatch(setUsersAvatar(<img src={profileData.photos.small} alt={"small avatar"}/>));
                    } else {
                        dispatch(setUsersAvatar(<img
                            src={'https://cs16planet.ru/images/content/avatars/avatar648.jpg'} alt={"small avatar"}/>));
                    }
                });
            } else {
                console.log("Error of authentication\nresultCode " + data.resultCode);
            }
        });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authorization());
            } else {
                //обрабатываем не правильный пароль
                //передаем название формочки, которую стопаем
                //вторым параметром ошибку
                // _error кинет общую ошибку, а не в какое то конкретное поле (login, email)
                const message = response.length > 0 ? response.data.message : 'Some error';
                dispatch(stopSubmit('login',{_error: message}));
            }
        });
    }
};

export const logOut = () => dispatch => {
    console.log("click");
    authApi.loginOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(setUsersAvatar(''));
        }
    });
};

export default authReduser;
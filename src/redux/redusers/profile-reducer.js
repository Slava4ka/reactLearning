import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_PROFILE = 'react_test/profile-reduser/SET-USERS-PROFILE';
const TOGGLE_IS_FETCHING = 'react_test/profile-reduser/TOGGLE-IS-FETCHING';
const SET_STATUS = 'react_test/profile-reduser/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'react_test/profile-reduser/SAVE_PHOTO_SUCCESS';

let initalState = {
    profile: null,
    isFetching: true,
    status: ''
};

function profileReducer(state = initalState, action) {
    switch (action.type) {
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default: {
            return state
        }

    }
}

const setProfileInfo = (profile) => ({type: SET_USERS_PROFILE, profile});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setStatus = (status) => ({type: SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        profileAPI.getProfile(userId).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setProfileInfo(data));
        });
    }
};

export const getStatus = (userId) => (dispach) => {
    profileAPI.getStatus(userId).then(status => dispach(setStatus(status)));
};

export const updateStatus = (status) => (dispach) => {
    profileAPI.updateStatus(status).then(responce => {
        if (responce.data.resultCode === 0) {
            dispach(setStatus(status));
        }
    });
};


// 96 урок, 22:22 описывается структура работы
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};


export default profileReducer;
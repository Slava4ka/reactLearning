import {profileAPI} from "../../api/api";

const SET_USERS_PROFILE = 'react_test/profile-reduser/SET-USERS-PROFILE';
const TOGGLE_IS_FETCHING = 'react_test/profile-reduser/TOGGLE-IS-FETCHING';
const SET_STATUS = 'react_test/profile-reduser/SET-STATUS';

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
        default: {
            return state
        }

    }
}

const setProfileInfo = (profile) => ({type: SET_USERS_PROFILE, profile});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setStatus = (status) => ({type: SET_STATUS, status});

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
            dispach(setStatus(status)) ;
        }
    });
};

export default profileReducer;
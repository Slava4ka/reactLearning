import {userApi} from "../../api/api";

const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initalState = {
    profile: null,
    isFetching: true
};

function profileReduser(state = initalState, action) {
    switch (action.type) {
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default: {
            return state
        }

    }
}

const setProfileInfo = (profile) => ({type: SET_USERS_PROFILE, profile});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        userApi.getProfile(userId).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setProfileInfo(data));
        });
    }
};


export default profileReduser;
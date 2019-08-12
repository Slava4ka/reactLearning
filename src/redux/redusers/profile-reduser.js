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

export const setProfileInfo = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default profileReduser;
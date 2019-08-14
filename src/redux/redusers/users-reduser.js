//AC - action creator
import {userApi} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

function usersReduser(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }
            );

        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
            );

        case SET_USERS: {
            // return {...state, users: [...state.users, ...action.users]} // те, которые есть склеиваются с пришлыми
            return {...state, users: action.users} // пользователи перезатираются
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.inProgress ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            };
        }

        default:
            return state
    }
}

const followAccept = (userId) => ({type: FOLLOW, userId});
const unfollowAccept = (userId) => ({type: UNFOLLOW, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleFollowingProgress = (inProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    inProgress,
    userId
});

// через thunk
export const getUsers = (currentPage, pageSize, firstLoad = true) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        userApi.getUsers(currentPage, pageSize).then(data => {

            if (!firstLoad) {
                dispatch(setCurrentPage(currentPage)); // перезапись текущей страницы
            }

            dispatch(setToggleFetching(false));
            dispatch(setUsers(data.items));

            // заблокирова кнопку follow/unfollow для текущего пользователя (нельзя былло добавить в вдрузья самого себя)
            // срабатывает только при первой загрузке componentDidMount, при onPageChanged  работать не должно, поэтому я ввел
            // третий параметр

            if (firstLoad) {
                dispatch(setUsersTotalCount(data.totalCount)); // записывать общее число страниц нужно только при componentDidMount
                userApi.authMe().then(data => {
                    dispatch(toggleFollowingProgress(true, data.data.id));
                });
            }
        });
    }
};

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userApi.follow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(followAccept(id))
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    }
};

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userApi.unfollow(id).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowAccept(id))
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    }
};

export default usersReduser;

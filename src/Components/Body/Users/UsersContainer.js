import React from 'react';
import UsersApiComponent from './UsersApiComponent';
import {connect} from "react-redux";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    setUsersTotalCountAC, setToggleFetchingAC
} from "../../../redux/redusers/users-reduser";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (currentPage) => {
            console.log("currentPage " + currentPage);
            dispatch(setCurrentPageAC(currentPage))
        },

        setUsersTotalCount: (usersTotalUsersCount) => {
            dispatch(setUsersTotalCountAC(usersTotalUsersCount))
        },

        toggleIsFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
export default UsersContainer
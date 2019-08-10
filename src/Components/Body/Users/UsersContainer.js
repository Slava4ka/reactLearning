import React from 'react';
import Users from './UsersC';
import {connect} from "react-redux";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    setUsersTotalCountAC
} from "../../../redux/redusers/users-reduser";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
            dispatch(setCurrentPageAC(currentPage))
        },

        setUsersTotalCount: (usersTotalUsersCount) => {
            dispatch(setUsersTotalCountAC(usersTotalUsersCount))
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer
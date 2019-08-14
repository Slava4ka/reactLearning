import React from 'react';
import UsersApiComponent from './UsersApiComponent';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../../redux/redusers/users-reduser";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        myId: state.auth.userId
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(UsersApiComponent);

export default UsersContainer

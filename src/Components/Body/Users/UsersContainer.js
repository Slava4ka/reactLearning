import React from 'react';
import UsersApiComponent from './UsersApiComponent';
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setUsersTotalCount, setToggleFetching
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

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleFetching
})(UsersApiComponent);

export default UsersContainer

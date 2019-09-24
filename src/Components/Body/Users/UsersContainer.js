import React from 'react';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";
import {follow, unfollow, getUsers} from "../../../redux/redusers/users-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    currentPageSelector,
    followingInProgressSelector,
    getPageSizeSelector,
    getUsersSelector, isFetchingSelector,
    myIdSelector,
    totalUsersCountSelector
} from "../../../redux/selectors/users-selectors";

class UsersComponent extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize, false);
    };

    render() {
        /* тк можно возвращать только одну компоненту этот список используется для заглушки, если не хочешь возвращать div*/
        return <>
            {this.props.isFetching === true ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state),
        myId: myIdSelector(state)
    }
};

/*
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

ниже укороченный синтаксис
*/

export default compose(connect(mapStateToProps, {follow, unfollow, getUsers}))(UsersComponent)
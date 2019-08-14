import React from 'react';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";



class UsersApiComponent extends React.Component {


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

export default UsersApiComponent;

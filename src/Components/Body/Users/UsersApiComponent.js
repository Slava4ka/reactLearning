import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";

class UsersApiComponent extends React.Component {

    componentDidMount = () => {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleFetching(false);
            this.props.setUsers(response.data.items)
        });
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

                   isFetching={this.props.isFetching}
            />
        </>
    }
}

export default UsersApiComponent;

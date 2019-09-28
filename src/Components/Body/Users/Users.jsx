import React from 'react';
import User from './User';
import Pagination from '../../common/Pagination/Pagination'

const Users = (props) => {
    return <div>
        <Pagination totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}
                    portionSize={props.paginatorPortionSize}
        />

        <div>
            {
                props.users.map(user => <User key={user.id}
                                              user={user}
                                              followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow}
                                              follow={props.follow}
                />)
            }
        </div>
    </div>
};

export default Users;

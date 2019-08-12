import React from 'react';
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)

                }} className={props.currentPage === p ? styles.selectedPage : ''}
                             key={p}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={styles.card}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : 'https://cs16planet.ru/images/content/avatars/avatar648.jpg'}
                                    className={styles.usersPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button onClick={
                                    () => {
                                        props.unfollow(u.id)
                                    }
                                }>Unfollow</button> : <button onClick={
                                    () => {
                                        props.follow(u.id)
                                    }
                                }>Follow</button>}
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>{u.id}</div>
                            </span>
                        </span>
                </div>
            )}
    </div>
};

export default Users;

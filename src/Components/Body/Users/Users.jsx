import React from 'react';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

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
                                {u.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "a80f00a3-59b1-40d3-b5f8-9e40e4cc41cc"}
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                    }
                                    }>Unfollow</button> :

                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "a80f00a3-59b1-40d3-b5f8-9e40e4cc41cc"}
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
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

import React from 'react';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow, }) => {
    return <div key={user.id} className={styles.card}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : 'https://cs16planet.ru/images/content/avatars/avatar648.jpg'}
                                    className={styles.usersPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                      onClick={() => {
                                                          unfollow(user.id)
                                                      }}>Unfollow</button> :

                                    <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                follow(user.id)
                                            }}>Follow</button>}
                            </div>
                        </span>
        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                <div>{user.id}</div>
                            </span>
                        </span>
    </div>
};

export default User;
import React, {useState} from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {

    const [convolute, setConvolute] = useState(false);

    const UsersBoxVisibility = () => {
        setConvolute(!convolute)
    };

    const styleOfUsersBox = convolute ? style.usersPressed : style.usersNotPressed;

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'} activeClassName={style.activeLink}>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/dialogs'} activeClassName={style.activeLink}>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/news'} activeClassName={style.activeLink}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/posts'} activeClassName={style.activeLink}>Posts</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/users'} activeClassName={style.activeLink} onClick={UsersBoxVisibility}>Users</NavLink>
                <ul className={styleOfUsersBox}>
                    <li>
                        <NavLink to={'/users/users_list'} activeClassName={style.activeLink}>Users List</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users/my_friends'} activeClassName={style.activeLink}>Friends</NavLink>
                    </li>
                </ul>

            </div>

            <div className={style.item}>
                <NavLink to={'/store'} activeClassName={style.activeLink}>Store</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/papers'} activeClassName={style.activeLink}>Papers</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/garbage'} activeClassName={style.activeLink}>Garbage</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
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
        </nav>
    )
}

export default Navbar;
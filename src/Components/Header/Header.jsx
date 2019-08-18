import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={style.header}>
            <img src='https://cityoflondonsinfonia.files.wordpress.com/2013/04/chanel-logo.jpg' alt={props.userId}/>
            <div className={style.loginBlock}>
                <span>
                    <NavLink to={'/login'}>{props.avatar}</NavLink>
                </span>
                {props.isAuth ?
                    <span>
                        <button onClick={props.logOut}>Log Out</button>
                    </span>
                    : ''}
            </div>
        </header>
    )
}

export default Header;





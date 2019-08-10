import React from 'react';
import styles from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    /*
    constructor(props) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            alert("status " + response.status);
            this.props.setUsers(response.data.items)
        });
        super(props)
    }
*/

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            alert("status " + response.status);
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={u.photos.small != null ? u.photos.small : 'https://cs16planet.ru/images/content/avatars/avatar648.jpg'}
                                    className={styles.usersPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? <button onClick={
                                    () => {
                                        this.props.unfollow(u.id)
                                    }
                                }>Unfollow</button> : <button onClick={
                                    () => {
                                        this.props.follow(u.id)
                                    }
                                }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                    </div>
                )}
        </div>
    }
}

export default Users
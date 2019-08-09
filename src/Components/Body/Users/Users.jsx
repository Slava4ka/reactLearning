import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [{
            id: 1,
            photo: 'https://cs16planet.ru/images/content/avatars/avatar648.jpg',
            fullName: 'Dmitry',
            status: 'I am a boze',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: true
        },
            {
                id: 2,
                photo: 'https://cs16planet.ru/images/content/avatars/avatar648.jpg',
                fullName: 'Slava',
                status: 'I am a cool gay',
                location: {city: 'RnD', country: 'Russia'},
                followed: false
            },
            {
                id: 3,
                photo: 'https://cs16planet.ru/images/content/avatars/avatar648.jpg',
                fullName: 'Ashot',
                status: 'Yo oy oy yo',
                location: {city: 'Erevan', country: 'Armenia'},
                followed: true
            },
            {
                id: 4,
                photo: 'https://cs16planet.ru/images/content/avatars/avatar648.jpg',
                fullName: 'Givi',
                status: 'Show me your tits',
                location: {city: 'Tbilisi', country: 'Georgia'},
                followed: false
            },
            {
                id: 5,
                photo: 'https://cs16planet.ru/images/content/avatars/avatar648.jpg',
                fullName: 'Tim',
                status: 'Big dick are back in town',
                location: {city: 'New-York', country: 'USA'},
                followed: true
            }])
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photo} className={styles.usersPhoto}/>
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country},</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )}
        </div>
    )
};

export default Users;
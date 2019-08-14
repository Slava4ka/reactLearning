import React from 'react';
import style from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={`${style.dialogItem}`}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={style.dialogItem}>
            {props.message}
        </div>
    )
}

function Dialogs(props) {

    const newMessageText = props.dialogsPage.newMessageText;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    // альтернатива ref. e - объект событие

    const onNewMessageChange = (e) => {
        const messageCurrentText = e.target.value;
        props.newMessageChange(messageCurrentText);
    };

    if(!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    props.dialogsPage.users.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    props.dialogsPage.messages.map(el => <Message message={el.message} key={el.id}/>)
                }
            </div>

            <div>
                <div>
                    <textarea value={newMessageText} onChange={onNewMessageChange} placeholder={'Enter your message'}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;
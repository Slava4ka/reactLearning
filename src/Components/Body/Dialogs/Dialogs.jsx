import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

    const newMessageText = props.newMessageText;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    // альтернатива ref. e - объект событие

    const onNewMessageChange = (e) => {
        const messageCurrentText = e.target.value;
        props.newMessageChange(messageCurrentText);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    props.users.map(el => <DialogItem id={el.id} name={el.name}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    props.messages.map(el => <Message message={el.message}/>)
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
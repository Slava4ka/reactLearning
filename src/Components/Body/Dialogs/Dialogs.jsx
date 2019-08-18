import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {reduxForm, Field} from 'redux-form';

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

    // сюда будет приходить из Field при клике
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

// это обертка, без которой поле Field работать не будет
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
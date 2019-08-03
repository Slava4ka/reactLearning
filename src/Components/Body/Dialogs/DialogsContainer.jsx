import React from 'react';
import {createSendNewMessageAction, createUpdateNewMessageAction} from "../../../redux/redusers/dialogs-reduser";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    const store = props.store.getState();

    const sendMessage = () => {
        props.store.dispatch(createSendNewMessageAction());
    };

    const newMessageChange = (messageCurrentText) => {
        props.store.dispatch(createUpdateNewMessageAction(messageCurrentText));
    };

    return (
        <Dialogs sendMessage={sendMessage} newMessageChange={newMessageChange} users={store.dialogsPage.users}
                 messages={store.dialogsPage.messages} newMessageText={store.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;
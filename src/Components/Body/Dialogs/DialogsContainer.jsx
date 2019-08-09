import React from 'react';
import {createSendNewMessageAction, createUpdateNewMessageAction} from "../../../redux/redusers/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageChange: (text) => {
             dispatch(createUpdateNewMessageAction(text))
        },
        sendMessage: () => {
            dispatch(createSendNewMessageAction())
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
const SEND_MESSAGE = 'react_test/dialogs-reduser/SEND-MESSAGE';

function sendMessage(state, action) {
    const message = action.newMessageBody;
    const messageToState = {id: state.messages.length + 1, message: message};
    return {
        ...state,
        messages: [...state.messages, messageToState],
    };
}

let initialState = {
    users: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Dasha"},
        {id: 5, name: "Sveta"}
    ],

    messages: [
        {id: 1, message: "hi!"},
        {id: 2, message: "How are you!"},
        {id: 3, message: "I'm you"},
        {id: 4, message: "y are me!"}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage(state, action);

        default:
            return state
    }
};

export const createSendNewMessageAction = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
};

export default dialogsReducer;
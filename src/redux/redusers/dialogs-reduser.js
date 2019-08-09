const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const updateNewMessageText = (state, newMessage) => {
    return {
        ...state,
        newMessageText: newMessage
    };
};

function sendMessage(state) {
    const message = state.newMessageText;
    const messageToState = {id: state.messages.length + 1, message: message};
    return {
        ...state,
        messages: [...state.messages, messageToState],
        newMessageText: ''
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
    ],
    newMessageText: ''
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(state, action.newMessage);

        case SEND_MESSAGE:
            return sendMessage(state);

        default:
            return state
    }
};

export const createUpdateNewMessageAction = (newMessage) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage}
};
export const createSendNewMessageAction = () => {
    return {type: SEND_MESSAGE}
};

export default dialogsReduser;
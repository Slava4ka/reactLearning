import postsReducer from "./redusers/posts-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";

let store = {

    _state: {

        postsPage: {
            posts: [
                {id: 1, message: "Fuck you", likesCount: 99},
                {id: 2, message: "Suck the dick", likesCount: 5},
                {id: 3, message: "Show me your tits", likesCount: 4},
                {id: 4, message: "Jololo", likesCount: 34},
                {id: 5, message: "fap fpa", likesCount: 87},
            ],
            newPostText: 'some new text',
        },

        dialogsPage: {
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
        }

    },

    getState() {
        return this._state
    },

    rerenderEntireTree() {
    },

    subscribe(obsever) {
        this.rerenderEntireTree = obsever; // наблюдатель паттерн observer
    },

    dispatch(action) {
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree(this._state)
    }

};

export default store;
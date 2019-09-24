import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./redusers/posts-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";
import usersReducer from "./redusers/users-reducer";
import profileReducer from "./redusers/profile-reducer";
import authReducer from "./redusers/auth-reducer";
import appReducer from "./redusers/app-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers(
    {
        postsPage: postsReducer, //каждому свойтву из store соответствуеь свой редьюсер
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        profilePage: profileReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
);

let store = createStore(redusers, applyMiddleware(thunkMiddleware)); // после этого создастся state с свойствами postPage и dialogsPage...
// все данные из redux идут через Контекст

// потом убрать
window.store = store;

export default store
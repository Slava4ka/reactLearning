import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReduser from "./redusers/posts-reduser";
import dialogsReduser from "./redusers/dialogs-reduser";
import usersReduser from "./redusers/users-reduser";
import profileReduser from "./redusers/profile-reduser";
import authReduser from "./redusers/auth-reduser";
import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers(
    {
        postsPage: postsReduser, //каждому свойтву из store соответствуеь свой редьюсер
        dialogsPage: dialogsReduser,
        usersPage: usersReduser,
        profilePage: profileReduser,
        auth: authReduser
    }
);

let store = createStore(redusers, applyMiddleware(thunkMiddleware)); // после этого создастся state с свойствами postPage и dialogsPage


// потом убрать
window.store = store;

export default store
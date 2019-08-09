import {combineReducers, createStore} from "redux";
import postsReduser from "./redusers/posts-reduser";
import dialogsReduser from "./redusers/dialogs-reduser";
import usersReduser from "./redusers/users-reduser";


let redusers = combineReducers(
    {
        postsPage: postsReduser, //каждому свойтву из store соответствуеь свой редьюсер
        dialogsPage: dialogsReduser,
        usersPage: usersReduser
    }
);

let store = createStore(redusers); // после этого создастся state с свойствами postPage и dialogsPage


// потом убрать
window.store = store;

export default store
import {combineReducers, createStore} from "redux";
import postsReduser from "./redusers/posts-reduser";
import dialogsReduser from "./redusers/dialogs-reduser";


let redusers = combineReducers(
    {
        postsPage: postsReduser, //каждому свойтву из store соответствуеь свой редьюсер
        dialogsPage: dialogsReduser
    }
);

let store = createStore(redusers); // после этого создастся state с свойствами postPage и dialogsPage


// потом убрать
window.store = store;

export default store
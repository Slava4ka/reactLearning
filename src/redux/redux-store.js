import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postsReducer from "./redusers/posts-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";
import usersReducer from "./redusers/users-reducer";
import profileReducer from "./redusers/profile-reducer";
import authReducer from "./redusers/auth-reducer";
import appReducer from "./redusers/app-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers(
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

// Добавил composeEnhancers для работы приложения Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); // после этого создастся state с свойствами postPage и dialogsPage...
// все данные из redux идут через Контекст

// потом убрать. Это для доступа к стору из консоли
window.__store__ = store;

export default store
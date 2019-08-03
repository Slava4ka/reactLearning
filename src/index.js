import React from 'react';
import * as serviceWorker from './serviceWorker';
//import store from './redux/store'
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./Components/App";


//Это хуета полнейшая, т.к. производительность страдает. После каждого изменения перерисовывется все!

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App posts={state.postsPage.posts}
                         newPostText={state.postsPage.newPostText}
                         users={state.dialogsPage.users}
                         messages={state.dialogsPage.messages}
                         newMessageText={state.dialogsPage.newMessageText}
                         dispatch={store.dispatch.bind(store)}
        />,

        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

// это для обычного store
// store.subscribe(rerenderEntireTree);

//это для redux
store.subscribe(() => {
        const stateFromeRedux = store.getState();
        rerenderEntireTree(stateFromeRedux);
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

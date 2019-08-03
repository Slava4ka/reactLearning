import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./Components/App";


//Это хуета полнейшая, т.к. производительность страдает. После каждого изменения перерисовывется все!

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App store={state}/>,

        document.getElementById('root'));
};

rerenderEntireTree(store);

store.subscribe(() => {
        rerenderEntireTree(store);
    }
);

serviceWorker.unregister();

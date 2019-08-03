import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Dialogs from './Body/Dialogs/Dialogs';
import Profile from '../Components/Body/Profile/Profile';
import News from "../Components/Body/News/News";
import Posts from "../Components/Body/Posts/Posts";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => (<Dialogs users={props.users}
                                                                     messages={props.messages}
                                                                     newMessageText={props.newMessageText}
                                                                     dispatch={props.dispatch}/>)}
                    />
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/posts'} render={() => (<Posts posts={props.posts}
                                                                 newPostText={props.newPostText}
                                                                 dispatch={props.dispatch}/>)
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import {Route} from "react-router-dom";
import HeaderContainer from '../Components/Header/HeaderContainer';
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";
import UsersContainer from "./Body/Users/UsersContainer";
import ProfileContainer from "./Body/Profile/ProfileContainer";
import Login from "./Body/Login/Login";
import NewsContainer from "./Body/News/NewsContainer";

// <Route path={'/profile/:userId?'} - вопросительный знак делает этот параметр функциональным

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => (<DialogsContainer/>)}/>

                <Route path={'/profile/:userId?'}
                       render={() => (<ProfileContainer/>)}/>

                <Route path={'/news'}
                       render={() => (<NewsContainer/>)}/>

                <Route path={'/posts'}
                       render={() => (<PostsContainer/>)}/>

                <Route path={'/users'}
                       render={() => (<UsersContainer/>)}/>

                <Route path={'/login'}
                       render={() => (<Login/>)}/>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import News from "../Components/Body/News/News";
import {Route} from "react-router-dom";
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";
import UsersContainer from "./Body/Users/UsersContainer";
import ProfileContainer from "./Body/Profile/ProfileContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => (<DialogsContainer/>)}/>

                <Route path={'/profile'}
                       render={() => (<ProfileContainer/>)}/>

                <Route path={'/news'}
                       component={News}/>

                <Route path={'/posts'}
                       render={() => (<PostsContainer/>)}/>

                <Route path={'/users'}
                       render={() => (<UsersContainer/>)}/>
            </div>
        </div>
    );
}

export default App;
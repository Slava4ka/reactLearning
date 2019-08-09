import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Profile from '../Components/Body/Profile/Profile';
import News from "../Components/Body/News/News";
import {Route} from "react-router-dom";
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";
import UsersContainer from "./Body/Users/UsersContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => (<DialogsContainer/>)}/>

                <Route path={'/profile'}
                       component={Profile}/>

                <Route path={'/news'}
                       component={News}/>

                <Route path={'/posts'}
                       render={() => (<PostsContainer/>)}/>

                <Route path={'/users'}
                       render={() => (<UsersContainer />)}/>
            </div>
        </div>
    );
}

export default App;
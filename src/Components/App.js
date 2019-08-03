import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Profile from '../Components/Body/Profile/Profile';
import News from "../Components/Body/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => (<DialogsContainer store={props.store}/>)}
                    />
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/posts'} render={() => (<PostsContainer store={props.store}/>)
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
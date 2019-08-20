import React, {Component} from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from '../Components/Header/HeaderContainer';
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";
import UsersContainer from "./Body/Users/UsersContainer";
import ProfileContainer from "./Body/Profile/ProfileContainer";
import Login from "./Body/Login/Login";
import NewsContainer from "./Body/News/NewsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/redusers/app-reduser";
import Preloader from "./common/Preloader/Preloader";
import {getAuthAvatar} from "../redux/redusers/auth-reduser";

// <Route path={'/profile/:userId?'} - вопросительный знак делает этот параметр функциональным
// Конвертировать в классовую компоненту ctrl + alt + shift + T

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId) {
            console.log(this.props.userId);
            this.props.getAuthAvatar(this.props.userId);
        }

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    userId: state.auth.userId
});

export default compose(withRouter,
    (connect(mapStateToProps, {initializeApp, getAuthAvatar})))(App);
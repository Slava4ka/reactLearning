import React, {Component} from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from '../Components/Header/HeaderContainer';
import PostsContainer from "./Body/Posts/PostsContainer";
import DialogsContainer from "./Body/Dialogs/DialogsContainer";
import UsersContainer from "./Body/Users/UsersContainer";
import ProfileContainer from "./Body/Profile/ProfileContainer";
import Store from "./Body/Store/Shop";
import Papers from "./Body/Papers/Papers";
import Garbage from "./Body/Garbage/GarbageFromTosterRu";
import Login from "./Body/Login/Login";
import NewsContainer from "./Body/News/NewsContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/redusers/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import {getAuthAvatar} from "../redux/redusers/auth-reducer";
import store from "../redux/redux-store";

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

                <div className="navbar">
                    <Navbar/>
                </div>

                <div className={'content'}>
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

                    <Route path={'/store'}
                           render={() => (<Store/>)}/>

                    <Route path={'/papers'}
                           render={() => (<Papers/>)}/>

                    <Route path={'/garbage'}
                           render={() => (<Garbage/>)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    userId: state.auth.userId
});

const AppContainer = compose(withRouter,
    (connect(mapStateToProps, {initializeApp, getAuthAvatar})))(App);

const AppDone = (props) => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
};

export default AppDone;
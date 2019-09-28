import React, {Component} from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from '../Components/Header/HeaderContainer';
import PostsContainer from "./Body/Posts/PostsContainer";
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
import {withLazySuspense} from "../hoc/withLazySuspence";

// lazy импорт, импортируется только когда надо
const DialogsContainer = React.lazy(() => import('./Body/Dialogs/DialogsContainer'));

// <Route path={'/profile/:userId?'} - вопросительный знак делает этот параметр функциональным
// Конвертировать в классовую компоненту ctrl + alt + shift + T

//28.09.2019 lesson 94 - сделал из DialogsContainer lazy

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
                        // ленивая загрузка реализована через HOC. Но можно делать и явно. В документации все подробно
                        // описано. Поймет и дебил. Так же можно обрабатывать и отлавливать ошибки.
                           render={withLazySuspense(DialogsContainer)}/>

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
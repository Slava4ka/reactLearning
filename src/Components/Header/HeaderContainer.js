import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData, setUsersAvatar} from "../../redux/redusers/auth-reduser";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + response.data.data.id).then(responseForAva => {
                    if (responseForAva.data.photos.small) {
                        this.props.setUsersAvatar(<img src={responseForAva.data.photos.small} alt={"small avatar"}/>);
                    } else {
                        this.props.setUsersAvatar(<img
                            src={'https://cs16planet.ru/images/content/avatars/avatar648.jpg'} alt={"small avatar"}/>);
                    }
                });
            } else {
                alert("Error of authentication\n" + "isAuth " + this.props.isAuth)
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    avatar: state.auth.avatar,
    loginLabel: state.auth.loginLabel
});

export default connect(mapStateToProps, {setAuthUserData, setUsersAvatar})(HeaderContainer)
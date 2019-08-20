import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/redusers/auth-reduser";

class HeaderContainer extends React.Component {

    componentDidMount() {
      //  this.props.authorization();
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
    avatar: state.auth.avatar
});

export default connect(mapStateToProps, {logOut})(HeaderContainer)
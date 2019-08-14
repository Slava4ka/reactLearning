import React from 'react';
import {connect} from "react-redux";
import {getProfile} from '../../../redux/redusers/profile-reduser'
import Profile from "./Profile";
import Preloader from "../../common/Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = (!this.props.match.params.userId) ? 2 : this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />;
            return (
                <>
                    {this.props.isFetching === true ? <Preloader/> : null}
                    <Profile {...this.props}/>
                </>
            )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

const withUrlDataContainerComponent = withRouter(ProfileContainer); // Это как третий контейнер (для аякса, для редакса, для взаимодействия с урлом)

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);
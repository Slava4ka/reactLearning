import React from 'react';
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../../redux/redusers/profile-reducer'
import Profile from "./ProfileVer2";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    refreshProfile() {
        const userId = (!this.props.match.params.userId) ? this.props.authorizedUserId : this.props.match.params.userId; // тут чекается адресная строка
        if (!userId) {
            this.props.history.push('/login');
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        console.log("Profile componentDidMount");
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            console.log("Profile componentDidUpdate");
            this.refreshProfile()
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching === true ? <Preloader/> : null}
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId} // владелец или нет true/false
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

/*
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent); // Это как третий контейнер (для аякса, для редакса, для взаимодействия с урлом)
*/
export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)


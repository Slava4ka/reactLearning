import React from 'react';
import * as axios from 'axios';
import {connect} from "react-redux";
import {setProfileInfo, setToggleFetching} from '../../../redux/redusers/profile-reduser'
import Profile from "./Profile";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true);
        const userId = (!this.props.match.params.userId) ? 2 : this.props.match.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setProfileInfo(response.data);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching === true ? <Preloader/> : null}
                <Profile {...this.props}/>
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const withUrlDataContainerComponent = withRouter(ProfileContainer); // Это как третий контейнер (для аякса, для редакса, для взаимодействия с урлом)

export default connect(mapStateToProps, {setProfileInfo, setToggleFetching})(withUrlDataContainerComponent);
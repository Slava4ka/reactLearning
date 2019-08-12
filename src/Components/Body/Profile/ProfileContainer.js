import React from 'react';
import * as axios from 'axios';
import {connect} from "react-redux";
import {setProfileInfo, setToggleFetching} from '../../../redux/redusers/profile-reduser'
import Profile from "./Profile";
import Preloader from "../../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {setProfileInfo, setToggleFetching})(ProfileContainer);
import React from 'react';
import style from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatu'

function Profile(props) {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.profileBody}>
                {console.log(props)}
                <div className={style.row}>
                    <div className={style.pictureAndSocial}>
                        <img src={props.profile.photos.large} alt="large photo"/>

                        <div>
                            <ul>
                                {Object.values(props.profile.contacts).map((a, index) => a != null ?
                                    <li key={index}>{a}</li> : '')}
                            </ul>
                        </div>

                    </div>

                    <div className={style.info}>
                        <span><h1>{props.profile.fullName}</h1></span>
                        <span><h5>id: {props.profile.userId}</h5></span>

                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                        <span><h5>{props.profile.lookingForAJob}</h5></span>
                        <span><h5>{props.profile.lookingForAJobDescription}</h5></span>


                    </div>
                </div>


            </div>
        )
    }
}

export default Profile;
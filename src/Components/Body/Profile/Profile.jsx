import React from 'react';
import style from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";

function Profile(props) {


    console.log(props);
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.profileBody}>
                <div className={style.row}>
                    <div className={style.pictureAndSocial}>
                        <img src={props.profile.photos.large} alt="large photo"/>

                        <div>
                            <ul>
                                {Object.keys(props.profile.contacts).map(a => <li>{a}</li>)}
                            </ul>
                        </div>

                    </div>

                    <div className={style.info}>
                        <span><h1>{props.profile.fullName}</h1></span>
                        <span><h5>id: {props.profile.userId}</h5></span>
                        <span><h3>Статус: {props.profile.aboutMe}</h3></span>
                        <span><h5>{props.profile.lookingForAJob}</h5></span>
                        <span><h5>{props.profile.lookingForAJobDescription}</h5></span>


                    </div>
                </div>


            </div>
        )
    }
}

export default Profile;
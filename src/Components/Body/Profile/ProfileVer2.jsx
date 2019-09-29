import React, {useState, useEffect} from 'react';
import style from './Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import Contact from "./Contacts";

function Profile({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    // попробуй сделать значек загрузки при изменении данных
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => setEditMode(false)
        );
    };

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.profileBody}>
                <div className={style.row}>

                    <div className={style.pictureAndSocial}>
                        <div>
                            <img
                                src={profile.photos.large || 'https://cs16planet.ru/images/content/avatars/avatar648.jpg'}
                                alt="large photo"/>
                            {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                        </div>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                    <div className={style.info}>
                        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                            : <ProfileData
                                goToEditMode={
                                    () => {
                                        setEditMode(true);
                                    }
                                }
                                profile={profile}
                                isOwner={isOwner}
                            />}
                    </div>

                </div>
            </div>
        )
    }
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><h5>id: {profile.userId}</h5></div>
        <div><b>Full name</b>: {profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {
            profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <br/>
        <hr/>
        <div>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
};

export default Profile;
import React from 'react';
import Contact from "./Contacts";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../Login/Login.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    const lookingForAJobCheckboxParams = profile.lookingForAJob ? {
        type: 'checkbox',
        checked: 'checked'
    } : {type: 'checkbox'};

    // в форме нужно просто наличие button, не нужен обработчик для нее. Он приходит из родителя onSubmit в Profile
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>

            {error &&
            <div className={style.errorMessage}>
                {error}
            </div>
            }

            <div><h5>id: {profile.userId}</h5></div>
            <div>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div><b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, lookingForAJobCheckboxParams)}
            </div>

            <div><b>My professional
                skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}</div>

            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <br/>
            <hr/>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return <div key={key}>
                        <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </div>
    </form>
};

const ProfileDataReduxForm = reduxForm({
    form: 'editProfile' // уникальное строговое имя (для state)
})(ProfileDataForm);

export default ProfileDataReduxForm;
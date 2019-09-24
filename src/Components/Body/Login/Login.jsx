import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.css';
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../../redux/redusers/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.dwsInput}>
                <Field placeholder={"Login/Email"} name={'email'} component={Input} type={'email'}
                       validate={[requiredField]}/>
            </div>
            <div className={style.dwsInput}>
                <Field placeholder={"Password"} name={'password'} component={Input} type={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" name={'remember me'} component={Input}/> remember me
            </div>
            {console.log("props.error " + error)}
            {error &&
                <div className={style.errorMessage}>
                    {error}
                </div>
            }
            <div>
                <button className={style.dwsSubmit}>Enter</button>
            </div>
        </form>
    )
};


const ReduxLoginForm = reduxForm({
    form: 'login' // уникальное строговое имя (для state)
})(LoginForm);


const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
        console.log(formData);
        login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.container}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)
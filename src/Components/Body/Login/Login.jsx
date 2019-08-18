import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.css';
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logOut} from "../../../redux/redusers/auth-reduser";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login/Email"} name={'email'} component={Input} type={'email'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={Input} type={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" name={'remember me'} component={Input}/> remember me
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>
    )
};


const ReduxLoginForm = reduxForm({
    form: 'login' // уникальное строговое имя (для state)
})(LoginForm);


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)
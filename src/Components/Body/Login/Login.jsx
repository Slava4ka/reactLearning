import React from 'react';
import {Field, reduxForm} from 'redux-form';
import style from './Login.module.css';
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validator";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={'login'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} component={Input} validate={[requiredField]}/>
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
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login
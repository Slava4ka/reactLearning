import React from 'react';
import style from './FormsControls.module.css';

// REST оператор
export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    console.log("meta.touched " + meta.touched);
    console.log("meta.error " + meta.error);
    console.log(meta);

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <textarea {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    console.log("meta.touched " + meta.touched);
    console.log("meta.error " + meta.error);
    console.log(meta);

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <input {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

import React from 'react';
import style from './Posts.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from '../../../utils/validators/validator'
import {Textarea} from '../../../Components/common/FormsControls/FormsControls'

const maxLengthCreator10 = maxLengthCreator(10);

function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={Textarea} placeholder={'Post massage'} validate={[requiredField, maxLengthCreator10]}/>
        </div>

        <div>
            <button>Add post</button>
        </div>
    </form>;
}

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

function Posts(props) {

    function onAddPost(values) {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBody}>
            <h3>Posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <hr/>
            <div>
                {props.posts.map(el => <Post data={el} key={el.id}/>)}
            </div>
        </div>
    );
}


export default Posts;
import React from 'react';
import style from './Posts.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";

function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={'textarea'}/>
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
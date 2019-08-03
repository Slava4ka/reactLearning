import React from 'react';
import style from './Posts.module.css';
import Post from './Post'
import {createAddPostAction, createUpdateNewPostAreaAction} from "../../../redux/redusers/posts-reduser";

let newPostElement = React.createRef();


function Posts(props) {

    debugger;

    let addPost = () => {
        props.dispatch(createAddPostAction());
    };

    function onPostChange() {
        const action = createUpdateNewPostAreaAction(newPostElement.current.value);
        props.dispatch(action);
    }

    return (
        <div className={style.postsBody}>
            <h3>Posts</h3>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <hr/>
            <div>
                {props.posts.map(el => <Post data={el}/>)}
            </div>
        </div>
    );
}

export default Posts;
import React from 'react';
import style from './Posts.module.css';
import Post from './Post'

function Posts(props) {
    let newPostElement = React.createRef();

    function onAddPost() {
        props.addPost();
    }

    function onPostChange() {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBody}>
            <h3>Posts</h3>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <hr/>
            <div>
                {props.posts.map(el => <Post data={el} key={el.id}/>)}
            </div>
        </div>
    );
}

export default Posts;
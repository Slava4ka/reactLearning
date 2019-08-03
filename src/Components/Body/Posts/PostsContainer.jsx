import React from 'react';
import Posts from './Posts'
import {createAddPostAction, createUpdateNewPostAreaAction} from "../../../redux/redusers/posts-reduser";

function PostsContainer(props) {

    const state = props.store.getState();

    function addPost() {
        props.store.dispatch(createAddPostAction());
    }

    function onPostChange(text) {
        const action = createUpdateNewPostAreaAction(text);
        props.store.dispatch(action);
    }


    return (
        <Posts updateNewPostText={onPostChange} addPost={addPost} posts={state.postsPage.posts}
              newPostText={state.postsPage.newPostText}/>
    );
}

export default PostsContainer;
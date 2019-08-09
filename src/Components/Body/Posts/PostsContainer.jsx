import React from 'react';
import Posts from './Posts'
import {createAddPostAction, createUpdateNewPostAreaAction} from "../../../redux/redusers/posts-reduser";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = createUpdateNewPostAreaAction(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(createAddPostAction());
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
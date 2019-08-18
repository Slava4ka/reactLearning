import React from 'react';
import Posts from './Posts'
import {createAddPostAction} from "../../../redux/redusers/posts-reduser";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(createAddPostAction(newPostText));
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
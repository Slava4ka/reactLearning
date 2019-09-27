import React from 'react';
import postsReducer, {createAddPostAction} from "../../redux/redusers/posts-reducer";

// название теста, колбек того что тестируем

it('new post should be added', () => {

    // 1. test data
    let action = createAddPostAction("It.com");
    let state = {
        posts: [
            {id: 1, message: "Fuck you", likesCount: 99},
            {id: 2, message: "Suck the dick", likesCount: 5},
            {id: 3, message: "Show me your tits", likesCount: 4},
            {id: 4, message: "Jololo", likesCount: 34},
            {id: 5, message: "fap fpa", likesCount: 87},
        ],
    };

    /// 2. test action
    let newState = postsReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(6
    );
});




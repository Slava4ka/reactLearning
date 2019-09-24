const ADD_POST = 'react_test/posts-reduser/ADD-POST';

function addPost(state, action) {
    const newPost = {id: state.posts.length + 1, message: action.newPostText, likesCount: 0};
    return {
        ...state,
        posts: [...state.posts, newPost], // тут push
        newPostText: ''
    }
}

function updateNewPostText(state, newText) {
    return {
        ...state,
        newPostText: newText
    };
}

let initialState = {
    posts: [
        {id: 1, message: "Fuck you", likesCount: 99},
        {id: 2, message: "Suck the dick", likesCount: 5},
        {id: 3, message: "Show me your tits", likesCount: 4},
        {id: 4, message: "Jololo", likesCount: 34},
        {id: 5, message: "fap fpa", likesCount: 87},
    ],
};

const postsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action);

        default:
            return state;
    }
};

export const createAddPostAction = (newPostText) => {
    return {type: ADD_POST, newPostText}
};

export default postsReduser;
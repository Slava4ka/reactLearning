const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_AREA = 'UPDATE-NEW-POST-AREA';

function addPost(state) {
    const newPost = {id: state.posts.length + 1, message: state.newPostText, likesCount: 0};
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
    newPostText: 'some new text',
};

const postsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);

        case UPDATE_NEW_POST_AREA:
            return updateNewPostText(state, action.newText);

        default:
            return state;
    }
};

export const createAddPostAction = () => {
    return {type: ADD_POST}
};

export const createUpdateNewPostAreaAction = (newText) => {
    return {type: UPDATE_NEW_POST_AREA, newText: newText}
};

export default postsReduser;
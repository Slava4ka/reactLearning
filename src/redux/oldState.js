/*
let rerenderEntireTree = () => {};

let state = {
    users: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Dasha"},
        {id: 5, name: "Sveta"}
    ],
    posts: [
        {id: 1, message: "Fuck you", likesCount: 99},
        {id: 2, message: "Suck the dick", likesCount: 5},
        {id: 3, message: "Show me your tits", likesCount: 4},
        {id: 4, message: "Jololo", likesCount: 34},
        {id: 5, message: "fap fpa", likesCount: 87},
    ],

    newPostText: 'some new text'

};

// экспорт без дефолда
export const addPost = () => {
    const newPost = {id: 6, message: state.newPostText, likesCount: 0};
    state.posts.push(newPost);
    state.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) =>{
    state.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (obsever) => {
    rerenderEntireTree = obsever; // наблюдатель паттерн observer
};

export default state;
*/
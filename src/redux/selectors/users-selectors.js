// селектор - это функция, которая принимает state и возвращает то что нужно бизнесу

import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users
};


// придумаем какой нибудь сложный селлектор

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) =>{
    // в createSelector можно передать кучу приметивных селекторов
    // он будет срабатывать, только года что то меняется
    // Здесь будет сложная логика

    return users.filter(u=> true);
});


export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
};

export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
};

export const currentPageSelector = (state) => {
    return state.usersPage.currentPage
};

export const paginatorPortionSizeSelector = (state) => {
    return state.usersPage.paginatorPortionSize
};

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching
};

export const followingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
};

export const myIdSelector = (state) => {
    return state.auth.userId
};




import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true, // для работы с cookies
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8fa07788-cfec-4493-aab4-e35ba082ad82'}
});

export const userApi = {

    // получить список пользователей
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    // добавить пользователя "в друзья"
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },

    // убрать пользователя из "друзей"
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    // узнать  информацию о текущем пользователе / авторизоваться
    authMe() {
        return authApi.authMe();
    }

};

export const authApi = {
    authMe() {
        return instance.get('auth/me', {withCredentials: true}).then(response => {
            return response.data
        });
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    loginOut() {
        return instance.delete(`auth/login`);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => {
            return responce.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(responce => {
            return responce.data
        })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
};

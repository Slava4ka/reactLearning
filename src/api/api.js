import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
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
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },

    // получить всю информацию о указаному пользователю
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        })
    },

    // узнать  информацию о текущем пользователе / авторизоваться
    authMe() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            return response.data
        });
    }
};

import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.pagination}>
        {pages.map(p => {
            return <span onClick={(e) => {
                onPageChanged(p)

            }} className={currentPage === p ? style.selectedPage : ''}
                         key={p}>{p}</span>
        })}
    </div>
};

export default Pagination;
import React, {useState} from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={style.pagination}>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
            prev
        </button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span onClick={(e) => {
                    onPageChanged(p)
                }} className={currentPage === p ? style.selectedPage : ''}
                             key={p}>{p}</span>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
            next
        </button>}

    </div>
};

export default Pagination;
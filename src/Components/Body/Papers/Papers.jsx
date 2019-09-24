import React, {useState} from 'react';
import style from './Papers.module.css';
import Paper from './Paper';

function Papers(props) {
    let papers = [];

    for (let i = 0; i < 5; i++) {
        papers.push(<Paper status={(i !== 0)}/>) //(i === 0) ? false : true
    }

    return (
        <div>
            {papers}
        </div>
    )
}

export default Papers;
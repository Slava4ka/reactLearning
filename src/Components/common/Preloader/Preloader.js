import React from 'react';
import preLoader from '../../../assets/images/Spin-1s-200px.svg';

const Preloader = (props) => {
    return <div className={"preloader"}>
        <img src={preLoader}/>
    </div>
};

export default Preloader
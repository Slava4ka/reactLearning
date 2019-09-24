import React, {useState} from 'react';
import style from "./Papers.module.css";

function Paper(props) {

    const [convolute, setConvolute] = useState(props.status);

    const changeSizeOfPaper = () => {
        setConvolute(!convolute)
    };

    return (
        <div>
            <div>
                {
                    !convolute &&
                    <div className={style.full_dress} onClick={changeSizeOfPaper}>
                        <h3>Развернутый</h3>
                    </div>
                }

                {
                    convolute &&
                    <div className={style.convolute} onClick={changeSizeOfPaper}>
                        <h3>Свернутый</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Paper;


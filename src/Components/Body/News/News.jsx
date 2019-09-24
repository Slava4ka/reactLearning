import React, {useState} from 'react'
import style from './News.module.css'

function News() {
    //это можно сделать хуком и менять состояние цвета, для такой херни и нужны хуки
    // классы тоже можно менять через состояние, наверное)

    const [active, setActive] = useState(false);
    const [classes, setClasses] = useState(`${style.box} ${style.disconnect}`);

    const click = () => {
        if (active === false) {
            setClasses(classes.replace(style.disconnect, style.active));
            setActive(true);
        } else {
            setClasses(classes.replace(style.active, style.disconnect));
            setActive(false);
        }
        console.log(classes);
    };

    return (
        <div>
            <div className={classes}>News
                <div>
                    <h5>{classes}</h5>
                    <button onClick={() => click()}>test</button>
                </div>
            </div>
        </div>


    )
}

export default News
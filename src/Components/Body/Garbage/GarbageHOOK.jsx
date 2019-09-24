import React, {useState, useEffect} from 'react';
import styleFromCss from './Garbage.module.css';

const ChildComponent = (props) => {
    const [style, setStyle] = useState(`${styleFromCss.childComponent}`);
    const [active, setActive] = useState(false)

    const setActiveStyle = () => {
        console.log("setActiveStyle");
        if (!active) {
            setStyle(`${styleFromCss.childComponent} ${styleFromCss.active}`)
            setActive(true)
        } else {
            setStyle(`${styleFromCss.childComponent}`);
            setActive(false)
        }
    };

    //console.log(props);
    console.log(`id ${props.id} style ${style}`);
    return (
        <div className={style} onClick={() => {
            props.updateData(props.id, () => setActiveStyle())
        }}>
            <h3>{props.name}</h3>
        </div>
    )
};


const ParentComponent = (props) => {

    const state = [{'id': 0, 'name': 'один'}, {'id': 1, 'name': 'два'}, {'id': 2, 'name': 'три'}];

    //В колбеке должно быть имя/id активного эл. Тогда всем остальным должны придти стили без active

    // тут должно быть id кликнутого элемента
    const [clicked, setClicked] = useState(null);

    const highlight = (id, makeChildActive) => {
        //console.log("click! " + id);
        setClicked(id);
        makeChildActive();
    };

    return (
        <div>
            {state.map(entity => <ChildComponent updateData={highlight}
                                                 key={entity.id}
                                                 id={entity.id}
                                                 name={entity.name}
                                                 isActive={(entity.id === clicked) ? styleFromCss.active : null}
            />)}
        </div>
    )
};

export default ParentComponent;
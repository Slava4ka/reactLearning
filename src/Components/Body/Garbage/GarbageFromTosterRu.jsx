import React, {useState, useEffect} from 'react';
import style from './Garbage.module.css';

const ChildComponent = (props) => {

    console.log("ChildComponent props");
    console.log(props);

    return (
        <div
            className={`${style.childComponent} ${props.isActive ? `${style.active}` : ''}`}
            onClick={props.onClick}
            data-id={props.id}
            data-name={props.name}
        >
            <h3>{props.name}</h3>
        </div>
    )
};


const ParentComponent = ({items}) => {
    items = [
        {id: 0, name: 'один'},
        {id: 1, name: 'два'},
        {id: 2, name: 'три'}
    ];

    const [active, setActive] = useState(null);

    const onClick = e => {
        // узнать кто именно из детей вызвал вызвал - e.target
        const receiveId = Number(e.target.dataset.id);
        console.log("came " + receiveId + "; " + "active " + active);
        if (receiveId === active) {
            console.log("Set null");
            setActive(null);
        } else {
            console.log("Set " + receiveId);
            setActive(receiveId);
        }
    };

    return (
        <div>
            {items.map(n =>
                <ChildComponent
                    key={n.id}
                    onClick={onClick}
                    isActive={(n.id === active) ? true : false}
                    temp={active}
                    {...n} // копирует все содержимое items
                />
            )}
        </div>
    )
};

export default ParentComponent;
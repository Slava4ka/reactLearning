import React, {useState, useEffect} from 'react';
import Preloader from "../../common/Preloader/Preloader";

const ProfileStatusWithHooks = props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    // механизм подобный методам ЖЦ
    // отслеживает какой либо элемент и отрисовывает компоненту при его изменении (синхронизация)
    // в данном случае [props.status]
    useEffect(() => {
            setStatus(props.status);
    }, [props.status]);
    
    
    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    const onEnterPress = (e) => {
        console.log(`key: ${e.key}`);
        if (e.key === 'Enter') {
            deactivateEditMode();
        }
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>Статус: {props.status}</span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}
                       onKeyPress={onEnterPress}/>
            </div>}
        </div>
    )
};

export default ProfileStatusWithHooks


// this.activateEditMode.bind(this)
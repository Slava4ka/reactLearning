import React, {useState} from 'react'

class ChildComponent extends React.Component {
    state = {
        name: 'Бумеранг вернулся назад'
    };

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.updateData(this.state.name)
                }}>Запустить бумеранг
                </button>
            </div>
        )
    }
}

class ParentComponent extends React.Component {
    state = {
        name: 'Бумеранг не запущен'
    };

    updateData = (value) => {
        this.setState({name: value})
    };

    render() {
        return (
            <div>
                <p>State: {this.state.name}</p>
                <ChildComponent updateData={this.updateData}/>
            </div>
        )
    }
}


const ChildComponentHook = (props) => {

    const [name, setname] = useState('Бумеранг вернулся назад');

    return (
        <div>
            <button onClick={() => {
                props.updateData(name)
            }}>Запустить бумеранг
            </button>
        </div>
    )
};

const ParentComponentHook = (props) => {

    const [name, setName] = useState('Бумеранг не запущен');

    return (
        <div>
            <p>State: {name}</p>
            <ChildComponentHook updateData={setName}/>
        </div>
    )
};

export default ParentComponentHook;
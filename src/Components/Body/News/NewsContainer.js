import React from "react";
import News from "./News"
import {connect} from "react-redux";
import {compose} from "redux";

class NewsContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <News {...this.props}/>
    }
}

export default compose ()(NewsContainer)
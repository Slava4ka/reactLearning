import React from 'react';
import Shop from "./Shop";

class ShopContainer extends React.Component {
    render() {
        return (
            <>
                <Shop {...this.props}/>
            </>
        )
    }
}
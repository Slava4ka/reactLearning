import React from 'react';
import Product from './Product';

const shop = [
    {"id": 10001, "name": "vanish", "image": "1014474865.jpg", "price": 50},
    {"id": 10002, "name": "finish lemon", "image": "1021028103.jpg", "price": 55},
    {"id": 10003, "name": "QNT delicious whey", "image": "1022398092.jpg", "price": 49},
    {"id": 10004, "name": "Nitro TECH", "image": "1023887020.jpg", "price": 55},
    {"id": 10005, "name": "Finish powerball", "image": "6000004255.jpg", "price": 87}
];

function Shop(props) {
    return (<div>
        <h1>Store</h1>
        {shop.map(item => <Product key={item.id} id={item.id} name={item.name} img={item.image} price={item.price}/>)}
    </div>)
}

export default Shop;
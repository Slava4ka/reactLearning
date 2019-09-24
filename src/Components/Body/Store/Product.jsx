import React from 'react';
import style from './Product.module.css';

function Product(props) {

    const showKey = () => {
        console.log(props.id);
    };

    return (
        <div className={style.goods_item}>
            <div className={style.name}>
                <h3>{props.name}</h3>
            </div>

            <div className={style.picture}>
                <img src={props.img}/>
            </div>

            <div className={style.priceAndAdd}>
                <div className={style.price}>
                    <h5>{props.price}$</h5>
                </div>

                <div className={style.add}>
                    <button onClick={() => showKey()}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product;
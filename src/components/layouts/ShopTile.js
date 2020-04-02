import React from 'react';

//Components
import ShareBtns from '../layouts/ShareBtns';

const ShopTile = (props) => {
    const img = require(`../../imgs/${props.shop.image}`);
    return(
        <div className="shop-item-container">
            <img src={img} alt="Shop Item"/>
            <div className="btns-container">
                <a href={props.shop.link} target="_blank" rel="noopener noreferrer" className="btn">Shop Now</a>
                <ShareBtns Link={props.shop.link} />
            </div>
        </div>
    );
}

export default ShopTile;
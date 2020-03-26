import React, { Fragment } from 'react';

//Components
import HomeHeader from '../layouts/HomeHeader';
import Navigation from '../layouts/Navigation';

//Data
import ShopData from '../../data/shop.json';

const Homepage = () => {

    const shopData = ShopData.map((item, index) => {
        if(index < 1){
            return(
                <Fragment key={index}>
                    <p>{item.name}</p>
                    <img src={require(`../../imgs/${item.image}`)} />
                </Fragment>
            )
        }
    })

    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <Navigation />
            {/* {shopData} */}
        </Fragment>
    );
}

export default Homepage;
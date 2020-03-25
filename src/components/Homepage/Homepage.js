import React, { Fragment } from 'react';

//Components
import HomeHeader from '../layouts/HomeHeader';

const Homepage = () => {
    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <p>Hello</p>
        </Fragment>
    );
}

export default Homepage;
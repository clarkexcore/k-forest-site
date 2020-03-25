import React, { Fragment } from 'react';

//Components
import HomeHeader from '../layouts/HomeHeader';
import Navigation from '../layouts/Navigation';

const Homepage = () => {
    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <Navigation />
            <p>Hello</p>
        </Fragment>
    );
}

export default Homepage;
import React from 'react';

//Image Assets
import Logo from '../../imgs/logo.png';

const HomeHeader = () => {
    return(
        <header>
            <div className="feed-container header-container">
                <h1>K. Forest</h1>
                <div className="gradient-bar gradient-bar-small"></div>
                <img src={Logo} alt="K. Forest Logo" />
            </div>
        </header>
    );
}

export default HomeHeader;
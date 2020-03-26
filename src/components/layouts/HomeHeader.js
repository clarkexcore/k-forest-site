import React from 'react';

//Image Assets
import Logo from '../../imgs/logo.png';

const HomeHeader = () => {
    return(
        <header>
            <div></div>
            <div className="logo-container">
                <img src={Logo} alt="K. Forest Logo" />
            </div>
            <div className="bottom-header">
                <p>K. Forest</p>
            </div>
        </header>
    );
}

export default HomeHeader;
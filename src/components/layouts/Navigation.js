import React, { Fragment, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navigation = () => {

    //Mobile Nav Open Function
    const [openMobile, setOpenMobile] = useState(false);
    const openNavClick = () => {
        setOpenMobile(!openMobile);
    }

    return(
        <Fragment>
                <nav>
                    <div className="container">
                        <ul className="nav-menu">
                            <li className="nav-desktop"><Link to="/" activeClassName="active-link">All</Link></li>
                            <li className="nav-desktop"><Link to="/music" activeClassName="active-link">Music</Link></li>
                            <li className="nav-desktop"><Link to="/video" activeClassName="active-link">Video</Link></li>
                            <li className="nav-desktop"><a href="https://kforest.myshopify.com/">Shop</a></li>
                            <li className="nav-desktop"><Link to="/contact" activeClassName="active-link">Contact</Link></li>
                            <li className="nav-mobile" onClick={openNavClick}><i className="fas fa-bars"></i></li>
                        </ul>
                    </div>
                </nav>
                {openMobile ?
                    <nav className="mobile-menu">
                        <div className="container">
                            <ul className="nav-menu">
                                <li><Link to="/" activeClassName="active-link">All</Link></li>
                                <li><Link to="/music" activeClassName="active-link">Music</Link></li>
                                <li><Link to="/video" activeClassName="active-link">Video</Link></li>
                                <li><a href="https://kforest.myshopify.com/">Shop</a></li>
                                <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                : null}
        </Fragment>
    );
}

export default Navigation; 
import React, { Fragment, useState, useEffect, createRef } from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navigation = () => {

    //Mobile Nav Open Function
    const [openMobile, setOpenMobile] = useState(false);
    const openNavClick = () => {
        setOpenMobile(!openMobile);
    }

    //Check if Nav Bar is that top
    const [isSticky, setIsSticky] = useState(false);
    const ref = createRef();

    // Mount
    useEffect(() => {
        const cachedRef = ref.current,
          observer = new IntersectionObserver(
            ([e]) => setIsSticky(e.intersectionRatio < 1),
            {threshold: [1]}
          )

        observer.observe(cachedRef)
        
        // unmount
        return function(){
            observer.unobserve(cachedRef)
        }
    }, [ref]);



    return(
        <Fragment>
            <div className={"sticky-menu" + (isSticky ? " is-stuck" : "")} ref={ref}>
                <div className="gradient-bar"></div>
                <nav>
                    <div className="container">
                        <ul className="nav-menu">
                            <li className="nav-desktop"><Link to="/" activeClassName="active-link">All</Link></li>
                            <li className="nav-desktop"><Link to="/music" activeClassName="active-link">Music</Link></li>
                            <li className="nav-desktop"><Link to="/video" activeClassName="active-link">Video</Link></li>
                            <li className="nav-desktop"><a href="https://kforest.myshopify.com/">Shop</a></li>
                            <li className="nav-desktop mr-0"><Link to="/contact" activeClassName="active-link">Contact</Link></li>
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
            </div>
        </Fragment>
    );
}

export default Navigation; 
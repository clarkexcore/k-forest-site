import React from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return(
        <footer className="text-center">
            {year}&copy; K. FOREST
        </footer>
    );
}

export default Footer;
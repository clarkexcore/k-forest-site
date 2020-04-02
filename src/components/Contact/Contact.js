import React, { Fragment } from 'react';

//Components
import AltHeader from '../layouts/AltHeader';
import Footer from '../layouts/Footer';

const Contact = () => {
    return(
        <Fragment>
            <AltHeader />
            <main className="contact-header">
                <div className="contact-container">
                    <h2><a href="mailto:management@kforest.com">management@kforest.com</a></h2>
                    <div className="gradient-bar gradient-bar-contact"></div>
                    <ul className="socials-list">
                        <li><a href="https://www.instagram.com/k.forest_/" targte="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/kforest_" targte="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://itunes.apple.com/ca/artist/k-forest/1070697546" targte="_blank"><i className="fab fa-apple"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCE5gO2gIMHzJ4loV7y9Gy2g" targte="_blank"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="https://open.spotify.com/artist/1uaS3ZokV40ZrpzSRhx4Ol" targte="_blank"><i className="fab fa-spotify"></i></a></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Contact;
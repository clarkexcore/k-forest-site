import React, { Fragment } from 'react';

// Dependencies
import TwitterShareLink from 'react-twitter-share-link';
import FacebookShareLink from 'react-facebook-share-link';

const ShareBtns = (props) => {
    return(
        <Fragment>
            <div className="btn btn-share">
                <span>Share</span>
                <FacebookShareLink link={props.Link}>
                    {link => (
                        <a className="share-link share-link-left" href={link} target='_blank' rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    )}
                </FacebookShareLink>
                <TwitterShareLink link={props.Link}>
                    {link => (
                        <a className="share-link share-link-right" href={link} target='_blank' rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    )}
                </TwitterShareLink>
            </div>
        </Fragment>
    );
}

export default ShareBtns;
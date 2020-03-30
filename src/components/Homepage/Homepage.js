import React, { Fragment, useState, useEffect } from 'react';

//Packages
import YouTube from 'react-youtube';
import TwitterShareLink from 'react-twitter-share-link';
import FacebookShareLink from 'react-facebook-share-link';

//Components
import HomeHeader from '../layouts/HomeHeader';
import Navigation from '../layouts/Navigation';

//Data
import ShopData from '../../data/shop.json';

const Homepage = () => {

    const [videos, setVideos] = useState(null);
    const [videoLoading, setVideoLoading] = useState(true);

    useEffect(() => {
        getVideos();
    }, []);


    //Get Videos from YouTube
    const getVideos = () => {
        const apiKey = process.env.REACT_APP_GOOGLE_API;
        const channelID = 'UCUFdaYrXodRczmBWQKighMQ';
        const maxResults = 5;
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;


        fetch(url)
            .then(res => {
                if(res.status >= 400){
                    throw new Error("Bad Respsonse From Server");
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setVideos(data.items);
                setVideoLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //JSX Elements
    const shopData = ShopData.map((item, index) => {
        if(index < 3){
            return(
                <div className="shop-item-container" key={index}>
                    <img src={require(`../../imgs/${item.image}`)} alt="Shop Item"/>
                    <div className="btns-container">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn">Shop Now</a>
                        <div className="btn btn-share">
                            <span>Share</span>
                            <FacebookShareLink link={item.link}>
                                {link => (
                                    <a className="share-link share-link-left" href={link} target='_blank' rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                )}
                            </FacebookShareLink>
                            <TwitterShareLink link={item.link}>
                                {link => (
                                    <a className="share-link share-link-right" href={link} target='_blank' rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                )}
                            </TwitterShareLink>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    });

    const videoPlayer = () => (
        <Fragment>
            {!videoLoading ? 
                videos.map(video => (
                    <div className="video-container" key={video.id.videoId}>
                        <YouTube
                            videoId={video.id.videoId}
                            className="yt-embed"
                            opts={{
                                playerVars: {
                                autoplay: 0
                                }
                            }}
                        />
                    </div>
                ))
            : null}
        </Fragment>
    );

    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <Navigation />
            <main>
                <div className="feed-container">
                    {shopData}
                    {videoPlayer()}
                </div>
            </main>
        </Fragment>
    );
}

export default Homepage;
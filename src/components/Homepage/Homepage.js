import React, { Fragment, useState, useEffect } from 'react';

//Packages
import YouTube from 'react-youtube';

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
        const url = "https://www.googleapis.com/youtube/v3/search?key=" +
        apiKey +
        "&channelId=" +
        channelID +
        "&part=snippet,id&order=date&maxResults=" +
        maxResults;


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
        if(index < 1){
            return(
                <Fragment key={index}>
                    <p>{item.name}</p>
                    <img src={require(`../../imgs/${item.image}`)} />
                </Fragment>
            )
        }
    });

    const videoPlayer = () => (
        <Fragment>
            {!videoLoading ? 
                videos.map(video => (
                    <div className="videoContainer">
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
            {shopData}
            {videoPlayer()}
        </Fragment>
    );
}

export default Homepage;
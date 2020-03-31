import React, { Fragment, useState, useEffect } from 'react';

//Packages
import YouTube from 'react-youtube';

//Components
import ShareBtns from '../layouts/ShareBtns';
import AltHeader from '../layouts/AltHeader';
import Footer from '../layouts/Footer';

const Video = () => {

    const [videos, setVideos] = useState(null);
    const [videoLoading, setVideoLoading] = useState(true);

    useEffect(() => {
        getVideos();
    }, []);


    //Get Videos from YouTube
    const getVideos = () => {
        const apiKey = process.env.REACT_APP_GOOGLE_API;
        const channelID = 'UCUFdaYrXodRczmBWQKighMQ';
        const maxResults = 10;
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

    const videoPlayer = () => (
        <Fragment>
            {!videoLoading ? 
                videos.map(video => {
                    const link = `https://www.youtube.com/watch?v=${video.id.videoId}`;
                    return(
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
                            <div className="btns-container">
                                <ShareBtns Link={link} />
                            </div>
                        </div>
                    );
                })
            : null }
        </Fragment>
    );

    return(
        <Fragment>
            <AltHeader />
            <main>
                <div className="feed-container">
                    {videoPlayer()}
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}
export default Video;
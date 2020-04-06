import React, { Fragment, useState, useEffect } from 'react';

//Data
import ShopData from '../../data/shop';
import MusicData from '../../data/music';

//Packages
import YouTube from 'react-youtube';

//Components
import HomeHeader from '../layouts/HomeHeader';
import Navigation from '../layouts/Navigation';
import ShareBtns from '../layouts/ShareBtns';
import Footer from '../layouts/Footer';
import MusicTile from '../Music/MusicTile';
import ShopTile from '../layouts/ShopTile';


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

    ////// JSX Elements \\\\\\

    //Music 
    const MusicItems = MusicData.map((item, index) => {
        if(index < 5){
            return(
                <Fragment>
                    <MusicTile music={item} />
                </Fragment>
            )
        } else {
            return null;
        }
    })

    // Video JSX
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


    //Shop JSX
    const ShopItems = ShopData.map((item, index) => {
        if(index < 3){
            return(
                <Fragment>
                    <ShopTile shop={item} />
                </Fragment>
            );
        } else {
            return null;
        }
    });

    return(
        <Fragment>
            <HomeHeader />
            <Navigation />
            <main>
                <div className="feed-container">
                    {MusicItems}
                    {videoPlayer()}
                    {ShopItems}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Homepage;
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

    //JSX Elements

    //Shop JSX
    const getShopItem = (num) => {
        return(
            <Fragment>
                <ShopTile shop={ShopData[num]} />
            </Fragment>
        );
    }

    // Video JSX
    const videoPlayer = (num) => {
        return(
            <Fragment>
                <div className="video-container" key={videos[num].id.videoId}>
                    <YouTube
                        videoId={videos[num].id.videoId}
                        className="yt-embed"
                        opts={{
                            playerVars: {
                            autoplay: 0
                            }
                        }}
                    />
                    <div className="btns-container">
                        <ShareBtns Link={`https://www.youtube.com/watch?v=${videos[num].id.videoId}`} />
                    </div>
                </div>
            </Fragment>
        )
    };

    // Music JSX
    const getMusicItem = (num) => {
        return (
            <Fragment>
                <MusicTile music={MusicData[num]} />
            </Fragment>
        );
    }

    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <Navigation />
            <main>
                <div className="feed-container">
                    {MusicData ?
                        getMusicItem(0)
                    : null }
                    {MusicData ?
                        getMusicItem(1)
                    : null }
                    { ShopData ?
                        getShopItem(0)
                    : null}
                    {!videoLoading ? 
                        videoPlayer(0)
                    : null }
                    {!videoLoading ? 
                        videoPlayer(1)
                    : null }
                    {MusicData ?
                        getMusicItem(2)
                    : null }
                    {MusicData ?
                        getMusicItem(3)
                    : null }
                    {!videoLoading ? 
                        videoPlayer(2)
                    : null }
                    {MusicData ?
                        getMusicItem(4)
                    : null }
                    {!videoLoading ? 
                        videoPlayer(3)
                    : null }
                    {!videoLoading ? 
                        videoPlayer(4)
                    : null }
                    { ShopData ?
                        getShopItem(1)
                    : null}
                    { ShopData ?
                        getShopItem(2)
                    : null}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Homepage;
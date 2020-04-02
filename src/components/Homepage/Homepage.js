import React, { Fragment, useState, useEffect } from 'react';

//Packages
import YouTube from 'react-youtube';

//Components
import HomeHeader from '../layouts/HomeHeader';
import Navigation from '../layouts/Navigation';
import ShareBtns from '../layouts/ShareBtns';
import Footer from '../layouts/Footer';

//Data
import ShopData from '../../data/shop.json';
import MusicData from '../../data/music.json';

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
                { ShopData ?
                    <div className="shop-item-container">
                        <img src={require(`../../imgs/${ShopData[num].image}`)} alt="Shop Item"/>
                        <div className="btns-container">
                            <a href={ShopData[num].link} target="_blank" rel="noopener noreferrer" className="btn">Shop Now</a>
                            <ShareBtns Link={ShopData[num].link} />
                        </div>
                    </div>
                : null}
            </Fragment>
        );
    }

    // Video JSX
    const videoPlayer = (num) => {
        return(
            <Fragment>
                {!videoLoading ?   
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
                : null }
            </Fragment>
        )
    };

    // Music JSX
    const getMusicItem = (num) => {
        return (
            <Fragment>
                {MusicData ?
                    <div className="music-container">
                        {MusicData[num].back_img ?
                            <div className="double-img-container">
                                <img src={require(`../../imgs/${MusicData[num].front_img}`)} alt="Shop Item"/>
                                <img src={require(`../../imgs/${MusicData[num].back_img}`)} alt="Shop Item"/>
                            </div>
                        :
                            <div className="single-img-container">
                                <img src={require(`../../imgs/${MusicData[num].front_img}`)} alt="Shop Item"/>
                            </div>
                        }
                        <h3 className="text-center">{MusicData[num].title}</h3>
                        <div className="spotify-embed-container">
                            <iframe className="spotify-embed" src={MusicData[num].embed} title={MusicData[num].title} width="800" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="btns-container">
                            <ShareBtns Link={MusicData[num].share_link} />
                        </div>
                    </div>
                : null}
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
                    {getMusicItem(0)}
                    {getMusicItem(1)}
                    {getShopItem(0)}
                    {videoPlayer(0)}
                    {videoPlayer(1)}
                    {getMusicItem(2)}
                    {getMusicItem(3)}
                    {videoPlayer(2)}
                    {getMusicItem(4)}
                    {videoPlayer(3)}
                    {videoPlayer(4)}
                    {getShopItem(1)}
                    {getShopItem(2)}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Homepage;
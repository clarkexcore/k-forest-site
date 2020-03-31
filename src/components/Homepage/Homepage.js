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
    const shopData = ShopData.map((item, index) => {
        if(index < 3){
            return(
                <div className="shop-item-container" key={index}>
                    <img src={require(`../../imgs/${item.image}`)} alt="Shop Item"/>
                    <div className="btns-container">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn">Shop Now</a>
                        <ShareBtns Link={item.link} />
                    </div>
                </div>
            )
        } else {
            return null;
        }
    });

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

    // Music JSX
    const musicData = MusicData.map((item, index) => {
        console.log(item);
        return(
            <Fragment>
                <div className="music-container" key={item.title}>
                    {item.back_img ?
                        <div className="double-img-container">
                            <img src={require(`../../imgs/${item.front_img}`)} alt="Shop Item"/>
                            <img src={require(`../../imgs/${item.back_img}`)} alt="Shop Item"/>
                        </div>
                    :
                        <div className="single-img-container">
                            <img src={require(`../../imgs/${item.front_img}`)} alt="Shop Item"/>
                        </div>
                    }
                    <h3 className="text-center">{item.title}</h3>
                    <div className="spotify-embed-container">
                        <iframe className="spotify-embed" src={item.embed} width="800" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </Fragment>
        );
    }) 

    return(
        <Fragment>
            <HomeHeader />
            <div className="gradient-bar"></div>
            <Navigation />
            <main>
                <div className="feed-container">
                    {shopData}
                    {musicData}
                    {videoPlayer()}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Homepage;
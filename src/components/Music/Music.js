import React, { Fragment } from 'react';

//Data
import MusicData from '../../data/music.json';

//Components
import ShareBtns from '../layouts/ShareBtns';
import AltHeader from '../layouts/AltHeader';
import Footer from '../layouts/Footer';

const Music = () => {

    // Music JSX
    const musicData = MusicData.map((item, index) => {
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
                        <iframe className="spotify-embed" src={item.embed} title={item.title} width="800" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="btns-container">
                        <ShareBtns Link={item.share_link} />
                    </div>
                </div>
            </Fragment>
        );
    }) 

    return(
        <Fragment>
            <AltHeader />
            <main>
                <div className="feed-container">
                    {musicData}
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}
export default Music;
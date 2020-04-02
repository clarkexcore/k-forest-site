import React from 'react';

//Components
import ShareBtns from '../layouts/ShareBtns';

const MusicTile = (props) => {
    const front_img = require(`../../imgs/${props.music.front_img}`);

    const check_img = () => {
        if(props.music.back_img !== null){
            return require(`../../imgs/${props.music.back_img}`);
        }
    }
    return(
        <div className="music-container">
            {props.music.back_img ?
                <div className="double-img-container">
                    <img src={front_img} alt="Shop Item"/>
                    <img src={check_img()} alt="Shop Item"/>
                </div>
            :
                <div className="single-img-container">
                    <img src={front_img} alt="Shop Item"/>
                </div>
            }
            <h3 className="text-center">{props.music.title}</h3>
            <div className="spotify-embed-container">
                <iframe className="spotify-embed" src={props.music.embed} title={props.music.title} width="800" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div className="btns-container">
                <ShareBtns Link={props.music.share_link} />
            </div>
        </div>
    );
}

export default MusicTile;
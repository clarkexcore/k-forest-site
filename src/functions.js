// These are unused functions for getting single site tiles

//Single Music Items
const getMusicItem = (num) => {
    return (
        <Fragment>
            <MusicTile music={MusicData[num]} />
        </Fragment>
    );
}


//Single Video Items
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


//Sinlge Shop Items
const getShopItem = (num) => {
    return(
        <Fragment>
            <ShopTile shop={ShopData[num]} />
        </Fragment>
    );
}
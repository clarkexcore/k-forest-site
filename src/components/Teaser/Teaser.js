import React, { Fragment } from 'react';
import axios from 'axios';

const Teaser = () => {

    const testPost = async () => {
        try{
            const res = await axios.get("http://api.alexclarke.ca/kforest/post_email.php", {});
            console.log(res);
        } catch(e){
            console.log(e);
        }
    }


    return(
        <Fragment>
            <div>Hello</div>
            <button onClick={e => testPost(e)}>Test</button>
        </Fragment>
    );
}

export default Teaser;
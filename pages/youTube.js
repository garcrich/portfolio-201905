import { useState, useEffect } from 'react';

import axios from 'axios';
import API_KEYS from '../API_KEYS';

const YouTube = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [img, setString] = useState({
      img: '',
      height: '',
      width: ''
  });

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UCul78U9NKBYHyqnhQfqUXmg&key=${API_KEYS.YOUTUBE}`)
        .then((response)=> {
            console.log(response);
            const items = response.data.items;
            setString({
                img: items[0].snippet.thumbnails.standard.url,
                // width: items[0].snippet.thumbnails.standard.width,
                // height: items[0].snippet.thumbnails.standard.height,

                //VIDEO url is made from videoID
                
                //https://www.youtube.com/watch?v=${videoId}
                //"videoId": "123123asdsad12"
            })
        }).catch(function (error) { 
            console.log(error)
        })
    }, [])

  return (
    <div>
        {count}
        <img src={img.img}  alt=""/>
        
    </div>
  )
}

export default YouTube;

// GET https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5 HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
//GET https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1

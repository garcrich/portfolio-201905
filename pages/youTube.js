import { useState, useEffect } from 'react';

import axios from 'axios';
import API_KEYS from '../API_KEYS';

const YouTube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=UCul78U9NKBYHyqnhQfqUXmg&key=${API_KEYS.YOUTUBE}`)
        .then((response)=> {
            const videosObj = response.data.items;
            const videos = videosObj.map(video => {
              return (
                {
                  videoData: video.snippet,
                  videoID: video.id.videoId
                }
              )
            });
            setYouTubeVideos({
              videos
            })
          }).catch(function (error) { 
            console.log(error)
          })
        }, [])
        
        return (

          <div>
            {console.log("youTubeVideo State",youTubeVideos)}
            {youTubeVideos && (youTubeVideos.videos).map((video) => {
              const {publishedAt, thumbnails, title} = video.videoData;
              return (
              <div key={publishedAt}>
                <img src={thumbnails.medium.url} alt=""/>
                <h3>{title}</h3>
                {/* MUST FIGURE OUT ONLOADING FOR ALL CONTENT */}
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.videoID}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              )
            }
          )}
          </div>
  )
}

export default YouTube;

// GET https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5 HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
//GET https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1

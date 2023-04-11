import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

let videoIdList = ["AOMpxsiUg2Q", "XM-HJT8_esM", "_nBlN9yp9R8", "Y-MX24vmECM"];


function TestPage() {
    const [videoId, setVideoId] = useState(videoIdList[0]);
    const [i, setIndex] = useState(0);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };
    // const onReady = (event) => {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    //     console.log(event.target)
    // }


    // const onPlayVideo = (event) => {
    //     const player = event.target;
    //     console.log(player.getCurrentTime())
    //     const time = player.getCurrentTime();
    //     let done = false;
    //     if (time >= 23.84825304196167 && !done) {
    //         setTimeout(stopVideo, 6000);
    //         done = true
    //         console.log("video is end")
    //     }
    //     function stopVideo() {
    //         player.stopVideo();
    //     }
    // }
    useEffect(() => {
        setVideoId(videoIdList[i]);
    }, [i]);

    const onEnd = (e) => {
        // i++;
        // setVideoId(videoIdList[i]);
        setIndex(i => i + 1);
    }

    return (
        <div>
            <YouTube videoId={videoId}
                opts={opts} onEnd={onEnd} />;
        </div>
    )
}

export default TestPage
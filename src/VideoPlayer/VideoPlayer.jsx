import './VideoPlayer.css'
import React, { useState, useEffect, useRef } from 'react';

const VideoPlayer = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        const handleTimeUpdate = () => {
            if (videoElement && videoElement.currentTime >= videoElement.duration - 1) {
                setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
            }
        };
        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [videos]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load();
            videoElement.play();
        }
    }, [currentVideoIndex]);

    return (
        <video ref={videoRef} autoPlay muted onEnded={handleVideoEnded}>
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
        </video>
    );
};

export default VideoPlayer;

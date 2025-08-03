import videoSource from '../assets/videos/PLLLLLLLLLLLLLLLLLEASE.webm';
import './VideoTest.css';

export default function VideoTest() {
    let playIt = true;


    return (
        <div className="video-container">
            <video 
                src={videoSource}
                controls
                preload="auto"
                muted
                onError={(e) => console.error('Video loading error:', e)}
                autoPlay={playIt}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
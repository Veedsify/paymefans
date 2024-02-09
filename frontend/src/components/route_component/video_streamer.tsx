import React, { useEffect, useRef } from "react";

interface VideoStreamerProps {
    className?: string;
}
const VideoStreamer: React.FC<VideoStreamerProps> = ({ className }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const fetchVideoStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing video stream:", error);
            }
        };
        fetchVideoStream();
    }, []);

    return (
        <>
            <video ref={videoRef} className={className} controls autoPlay />
        </>
    );
};

export default VideoStreamer;

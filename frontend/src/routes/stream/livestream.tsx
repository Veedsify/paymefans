import VideoStreamer from "@/components/route_component/video_streamer";

const Stream = () => {
    return (
        <div className="relative min-h-[92dvh] md:h-screen mb-20 md:mb-0 border-none outline-none pointer-events-all">
            <VideoStreamer className="absolute w-full h-full object-cover -z-10" />
            {/* <div className="absolute inset-0 bg-video-stream-gradient">

            </div> */}
        </div>
    );
}

export default Stream;
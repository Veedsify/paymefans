import VideoStreamer from "@/components/route_component/video_streamer";
import { LucideSend } from "lucide-react";

const Stream = () => {
    return (
        <div className="relative min-h-screen-custom border-none outline-none pointer-events-all">
            <VideoStreamer className="absolute inset-0 w-full h-full object-cover " />
            <div className="absolute inset-0 bg-video-stream-gradient ">
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <div>hhh</div>
                <div className="p-4 pb-10">
                    <form action="" className="flex items-center gap-2">
                        <input type="text" className="p-3 border border-white w-full rounded-md font-medium flex-1 bg-transparent text-white" />
                        <button type="submit" className="p-3 bg-primary-dark-pink rounded-md">
                            <LucideSend stroke="#fff" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Stream;
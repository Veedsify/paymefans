import MessageBubble from "@/components/sub_componnets/message_bubble";
import MessageInput from "@/components/sub_componnets/message_input";
import { LucideArrowLeft, LucideGrip } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const Chats = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        ref.current?.scrollTo(0, ref.current?.scrollHeight);
    }, []);
    return (
        <div className="relative chat_height">
            <div className="flex items-center border-b py-6 px-5 pb-6">
            <div className="mr-6 sm:mr-10">
                    <Link to="/mix/messages">
                        <LucideArrowLeft size={30} className="cursor-pointer" />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <div><img src="/images/user.png" alt="" /></div>
                    <div className="">
                        <h1 className="font-bold text-sm md:text-base">
                            <Link to="/mix/profile">Kesha Adams</Link>
                        </h1>
                        <div className="flex gap-1 items-center text-xs md:text-xs">
                            <span className="block text-center align-middle w-3 h-3 bg-green-400 rounded-full"></span>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <LucideGrip size={30} className="cursor-pointer" />
                </div>
            </div>
            <div className="max-h-[80vh] overflow-auto pb-3" ref={ref}>
                <div className="p-4">
                    <MessageBubble
                        sender="receiver"
                    />
                </div>
                <div className="p-4">
                    <MessageBubble
                        sender="sender"
                    />
                </div>
                <div className="p-4">
                    <MessageBubble
                        sender="receiver"
                        message="Hello, how are you doing?"
                    />
                </div>
                <div className="p-4">
                    <MessageBubble
                        sender="sender"
                        message="I'm doing great, thanks for asking."
                    />
                </div>
            </div>

            <div className="fixed bottom-0  z-30 lg:w-[44%] w-full bg-white ">
                <MessageInput />
            </div>
        </div>

    );
}

export default Chats;
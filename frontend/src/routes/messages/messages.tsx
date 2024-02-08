import { LucideSearch } from "lucide-react";
import { Link } from 'react-router-dom';
const Messages = () => {
    return (
        <div className="py-3 px-3">
            <div className="flex items-center mb-7">
                <span className="font-bold text-xl flex-shrink-0">Messages</span>
                <div className="flex items-center justify-center w-8 h-8 aspect-square flex-shrink-0 ml-auto text-white md:py-3 md:px-3 py-1 px-1  bg-primary-text-dark-pink rounded-full font-bold">2</div>
            </div>
            <div className="flex align-baseline justify-between border border-gray-400 rounded-md p-4 mb-7 w-full">
                <input type="text" placeholder="Search Messages" className=" text-sm outline-none border-none" />
                <LucideSearch className="block text-center" />
            </div>
            <Link to="/mix/chats/1" className="block bg-messages-unread mb-3 rounded">
                <div className="flex items-center gap-2 md:gap-5 p-3">
                    <img src="/images/user.png" alt="" className="object-cover rounded-full md:w-16 aspect-square" />
                    <div className="flex-1">
                        <div className="flex flex-1 text-sm gap-4 mb-2 w-full">
                            <h1 className="font-bold"><Link to="/">Kesha Adams</Link></h1>
                            <p className="hidden md:block"><Link to="/">@keshaadams</Link></p>
                            <div className="flex items-center gap-2 ml-auto">
                                <p className="hidden md:block">Jan 22</p>
                                <span className="text-white w-2 h-2 bg-primary-dark-pink rounded-full block"></span>
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="text-xs md:text-sm">Hey, I need to talk to you about something.....</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/mix/chats/1" className="block mb-3 rounded">
                <div className="flex items-center gap-2 md:gap-5 p-3">
                    <img src="/images/user.png" alt="" className="object-cover rounded-full md:w-16 aspect-square" />
                    <div className="flex-1">
                        <div className="flex flex-1 text-sm gap-4 mb-2 w-full">
                            <h1 className="font-bold"><Link to="/">Kesha Adams</Link></h1>
                            <p className="hidden md:block"><Link to="/">@keshaadams</Link></p>
                            <div className="ml-auto">
                                <p className="hidden md:block">Jan 22</p>
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="text-xs md:text-sm">Hey, I need to talk to you about something.....</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Messages;
import { LucideHeart, LucideMessageSquare, LucideRepeat2, LucideShare } from "lucide-react";
import { Link } from "react-router-dom";
import QuickPostActions from "../sub_componnets/quick_post_actions";
import { SetStateAction, useState } from "react";

interface PostComponentProps {
    user: {
        name: string;
        link: string;
        username: string;
        image: string;
    };
    data: {
        post: string;
        images: string[];
        time: string;
    };
}
const PostComponent: React.FC<PostComponentProps> = ({ user, data }) => {
    const imageLength = data.images.length;
    const [activeImage, setActiveImage] = useState<string | null>(null)
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                <div className="flex items-center gap-3">
                    <img src={user.image} alt=""
                        loading="lazy" className="w-8 md:w-10 rounded-full aspect-square object-cover" />
                    <Link to={user.link} className="flex items-center gap-1">
                        <p className="text-black font-bold">{user.name}</p>{user.username}
                    </Link>
                    <small className="ml-auto">3h</small>
                </div>

                <QuickPostActions />
            </div>

            <p className="py-2 leading-loose text-gray-700">
                {data.post}
            </p>

            <div className={`grid gap-3 ${data.images.length === 2 ? "grid-cols-2" : data.images.length >= 3 ? "grid-cols-3" : "grid-cols-1"}`}>
                {data.images.slice(0, 3).map((image, index) => (
                    <div className="relative" key={index && index}>
                        <img
                            src={image}
                            alt=""
                            onClick={() => setActiveImage(image)}
                            loading="lazy"
                            className="w-full rounded-lg mt-3 aspect-square object-cover cursor-pointer"
                        />
                        {index === 2 && data.images.length > 3 ? (
                            <Link to="/posts/1" className="flex absolute inset-0 items-center justify-center bg-black rounded-lg mt-3 aspect-square bg-opacity-70 cursor-pointer select-none">
                                <p className="text-xl font-bold select-none text-white">+{imageLength - 3}</p>
                            </Link>
                        ) : null}
                    </div>
                ))}
            </div>
            <PostComponentPreview image={activeImage} close={setActiveImage} />
            <div className="flex mt-6 justify-around text-sm w-full text-gray-600 py-1">
                <span className="flex items-center gap-1 text-xs cursor-pointer font-medium ">
                    <LucideHeart size={20} />
                    23
                </span>
                <span className="flex items-center gap-1 text-xs cursor-pointer font-medium">
                    <LucideMessageSquare size={20} />
                    16
                </span>
                <span className="flex items-center gap-1 text-xs cursor-pointer font-medium">
                    <LucideRepeat2 size={20} />
                    2
                </span>
                <span className="flex items-center gap-1 text-xs cursor-pointer font-medium">
                    <LucideShare size={20} />
                </span>
            </div>
        </div>
    );
}

export default PostComponent;


const PostComponentPreview = ({ image, close }: { image: string | null, close: React.Dispatch<SetStateAction<string | null>> }) => {

    return (
        <div
            onClick={() => {
                close(null)
            }}
            className={`fixed transition-all ease-in-out duration-200 inset-0 w-full flex items-center justify-center bg-black z-50 bg-opacity-90
            ${image ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"}`}>
            <div className="p-4">
                <img src={image ? image : ""} className={`w-screen md:w-[550px] block object-cover transition-all duration-200 ${image ? "scale-100" : "scale-75"}`} alt="" />
            </div>
        </div>
    )
}
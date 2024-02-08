import { Link } from "react-router-dom";

const HookupSubscription = () => {
    return (
        <Link to="/" className="flex flex-col items-center gap-2 my-5 select-none">
            <img src="/images/register_image.png" alt="" className="object-cover w-20 h-20 rounded-full lg:w-24 lg:h-24 aspect-square" />
            <p className="text-sm font-bold text-center">Cartoon🦁</p>
            <div className="flex flex-wrap justify-center items-center gap-1 text-sm text-center ">
                <span className="flex items-center ">
                    <img src="/site/coin.svg" alt="" className="w-4 h-4" />
                    <span className="font-bold text-primary-dark-pink">50</span>
                </span>
                <span className="block text-xs text-center text-slate-700 ">Per msg</span>
            </div>
        </Link>
    );
}

export default HookupSubscription;
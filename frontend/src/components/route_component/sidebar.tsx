import { LucideSettings, LucideLogOut, LucideHelpCircle, LucideUser, LucideHeart, LucideAirplay, LucideStore, LucideMessageSquare, LucideUserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="lg:ml-auto bg-white border-r h-screen fixed lg:sticky top-0 overflow-auto w-72 p-4 z-50">
      <div className="mt-8 mb-16">
        <img src="/site/logo2.png" alt="" />
      </div>
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/images/login_image.png"
            className="h-12 w-12 object-cover rounded-full"
            alt=""
          />
          <div>
            <h2 className="font-bold mb-0 text-sm leading-none">
              Dike Wisdom
            </h2>
            <span className="text-gray-600 text-sm">@dikewisdom</span>
          </div>
        </div>
        <div className="pt-5 mb-3">
          <h2 className="font-bold text-xl leading-none mb-1 flex items-center">1,000
            <span className="ml-2">
              <img src="/site/coin.svg" alt="coin" />
            </span>
          </h2>
          <span className="text-gray-600 text-sm font-medium">Your Balance</span>
        </div>
        <div className=" flex gap-3 pt-4 mb-5">
          <button className="text-white bg-black p-2 rounded w-3/5 text-xs font-medium">
            Add Funds
          </button>
          <button className="text-black bg-white p-2 rounded border border-gray-600  w-3/5 text-xs font-medium">
            Wallet
          </button>
        </div>
        <div className="pt-6">
          <Link to="/me/@dikewisdom/profile" className="flex gap-5 p-2 items-center mb-2">
            <LucideUser />
            <p>Profile</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideAirplay />
            <p>Go Live</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideHeart />
            <p>Hook Up</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideStore />
            <p>Store</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideMessageSquare />
            <p>Messages</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideUserPlus />
            <p>Become A Model</p>
          </Link>
          <hr className="mt-8 mb-8" />
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideHelpCircle />
            <p>Help</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideSettings />
            <p>Settings & Privacy</p>
          </Link>
          <Link to="/" className="flex gap-5 p-2 items-center mb-2">
            <LucideLogOut />
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

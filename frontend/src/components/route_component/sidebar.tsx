import { useSideBarContext } from "@/lib/pageContexts";
import { LucideSettings, LucideLogOut, LucideHelpCircle, LucideUser, LucideHeart, LucideAirplay, LucideStore, LucideMessageSquare, LucideUserPlus } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { sideBarState, setSideBar } = useSideBarContext()
  const { pathname } = useLocation()
  useEffect(() => {
    const closeSideBar = () => {
      setSideBar(false)
    }
    closeSideBar()
  }, [pathname, setSideBar]);
  return (
    <>
      <div className={`lg:ml-auto bg-white h-screen lg:h-screen fixed lg:sticky top-0 overflow-auto smart-width p-4 z-50 shadow-xl lg:shadow-none lg:border-r duration-300 ease-in-out  ${sideBarState ? "left-0" : "-left-full"}`
      }>
        <div className="mt-8 mb-16 ">
          <img src="/site/logo2.png" alt="" />
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/login_image.png"
              className="object-cover w-12 h-12 rounded-full"
              alt=""
            />
            <div>
              <h2 className="mb-0 text-sm font-bold leading-none">
                Dike Wisdom
              </h2>
              <span className="text-sm text-gray-600">@dikewisdom</span>
            </div>
          </div>
          <div className="pt-5 mb-3">
            <h2 className="flex items-center mb-1 text-xl font-bold leading-none">1,000
              <span className="ml-2">
                <img src="/site/coin.svg" alt="coin" />
              </span>
            </h2>
            <span className="text-sm font-medium text-gray-600">Your Balance</span>
          </div>
          <div className="flex gap-3 pt-4 mb-5 ">
            <Link to="/mix/points" className="p-2 px-8 text-xs font-semibold text-white bg-black rounded">
              Add Funds
            </Link>
            <Link to="/mix/wallet" className="p-2 px-8 text-xs font-semibold text-black bg-white border border-gray-600 rounded">
              Wallet
            </Link>
          </div>
          <div className="pt-6">
            <Link to="/mix/profile" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideUser />
              <p>Profile</p>
            </Link>
            <Link to="/mix/live" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideAirplay />
              <p>Go Live</p>
            </Link>
            <Link to="/hookup" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideHeart />
              <p>Hook Up</p>
            </Link>
            <Link to="/mix/" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideStore />
              <p>Store</p>
            </Link>
            <Link to="/mix/messages" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideMessageSquare />
              <p>Messages</p>
            </Link>
            <Link to="/mix/models/benefits" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideUserPlus />
              <p>Become A Model</p>
            </Link>
            <hr className="mt-8 mb-8" />
            <Link to="/mix/" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideHelpCircle />
              <p>Help</p>
            </Link>
            <Link to="/mix/settings" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideSettings />
              <p>Settings & Privacy</p>
            </Link>
            <Link to="/mix/" className="flex items-center gap-5 p-2 mb-2 transition-all duration-200 hover:bg-gray-200 rounded-xl">
              <LucideLogOut />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={() => setSideBar(false)}
        className={`lg:hidden block fixed inset-0 z-40 w-full bg-opacity-50 duration-300 ease-in-out bg-black ${sideBarState ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      </div>

    </>
  );
};

export default SideBar;

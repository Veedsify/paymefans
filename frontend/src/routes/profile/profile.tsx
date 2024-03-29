import ProfileTabs from "@/components/sub_componnets/profile_tabs";
import {
  LucideCalendar,
  LucideLink,
  LucideLock,
  LucideMail,
  LucideMapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="overflow-hidden">
        <img
          src="https://images.pexels.com/photos/19983799/pexels-photo-19983799/free-photo-of-eu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="inset-0 aspect-21-9 object-cover w-full h-full"
        />
        <div className="relative flex w-full px-2 md:px-5">
          <img
            src="https://images.pexels.com/photos/16425706/pexels-photo-16425706/free-photo-of-smiling-woman-with-afro-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="absolute object-cover md:w-24 md:h-24 w-20 h-20 sm:border-4 border-2 rounded-full md:-top-12  -top-6 border-primary-dark-pink "
          />
          <div className="flex items-center gap-3 sm:p-3 ml-auto p-3  ">
            <button>
              <p className="sm:px-4 py-1 px-2  text-sm font-semibold border border-black rounded font text-color ">
                Follow
              </p>
            </button>
            <button>
              <p className="sm:px-4 py-1 px-2 text-sm font-semibold text-white bg-black border border-black rounded text-color">
                Subscribe
              </p>
            </button>
            <Link
              to="/mix/chats/1"
              className="p-1 text-white rounded bg-primary-dark-pink "
            >
              <LucideMail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2 mt-2 mb-12 md:px-5">
          <div className="flex flex-col ">
            <h1 className="font-bold ">Kesha Adams</h1>
            <small className="text-gray-500 ">@keshaadams</small>
          </div>
          <p className="font-medium mb-2 leading-loose text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 font-medium text-primary-text-dark-pink text-sm mb-2"
          >
            <LucideLink className="text-primary-text-dark-pink" size={18} />
            keshaadams.com/about
          </Link>
          <div className="flex gap-3 flex-wrap text-sm items-center font-semibold text-gray-700 mb-2">
            <span className="flex gap-2 items-center">
              <LucideMapPin className="text-primary-text-dark-pink" size={18} />
              <span>Lagos, NG</span>
            </span>
            <span className="flex items-center gap-2">
              <LucideLock className="text-primary-text-dark-pink" size={18} />
              <span>Model</span>
            </span>
            <span className="flex items-center gap-2">
              <LucideCalendar className="text-primary-text-dark-pink" size={18} />
              <span>Joined Nov 2015</span>
            </span>
          </div>

          <div className="flex gap-2 mb-3  flex-wrap sm:text-base text-sm">
            <span className="flex gap-2 items-center">
              <h1 className="font-bold text-sm">2.3K</h1>
              <p className="font-medium text-gray-500 text-sm">Followers</p>
            </span>
            <span className="flex gap-2 items-center">
              <h1 className="font-bold text-sm">38.9K</h1>
              <p className="font-medium text-gray-500 text-sm">Following</p>
            </span>
            <span className="flex gap-2 items-center ">
              <h1 className="font-bold text-sm">13.3K</h1>
              <p className="font-medium text-gray-500 text-sm">Subscribers</p>
            </span>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </>
  );
};

export default Profile;

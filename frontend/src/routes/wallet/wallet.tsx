// import { LucideCalendar, LucideLink, LucideLock, LucideMail, LucideMapPin, } from "lucide-react";
import { Link } from "react-router-dom";
const Wallet = () => {
    return (
        <div className="p-4 py-8">
            <div className="flex flex-wrap gap-5 items-center justify-between pb-6">
                <div className="flex align-middle gap-5">
                    <img src="/images/user.png" alt="" className="object-cover w-13 h-13 border-2 rounded-full sm:-top-12  -top-12" />
                    <div className="self-center">
                        <h2 className="font-bold">Dike Wisdom</h2>
                        <p>@dikewisdom</p>
                    </div>
                </div>
                <div>
                    <Link to="/points" className="p-3 px-8 text-xs font-semibold text-white bg-black rounded">
                        Add Funds
                    </Link>
                </div>
            </div>
            <div className="mb-5 flex align-middle justify-between bg-primary-dark-pink text-white p-5 rounded-xl">
                <div className="grid gap-3">
                    <small className="text-md">Your Ballance</small>
                    <h1 className="text-xl md:text-3xl font-bold">₦ 100,000</h1>
                </div>
                <div className="flex self-center">
                    <div className="bg-coins-card-top md:px-5 md:py-3 p-2 px-4 rounded-md">
                        <div className="opacity-100 flex gap-1">
                            <span>1,000</span>
                            <img src="/site/coin.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-black text-white p-5 rounded-xl">
                <small className="text-md">Your Ballance</small>
                <h1 className="text-xl md:text-3xl font-bold mb-4">₦ 100,000</h1>
                <button className="block text-sm text-center bg-coins-card-bottom px-6 py-3 rounded-md w-full text-primary-dark-pink font-semibold">WITHDRAW</button>
            </div>
            <div>
                <Link to="/mix/wallet/add" className="block text-center bg-coins-card-bottom px-6 py-3 rounded-md w-full text-primary-dark-pink font-semibold my-5 text-sm md:text-base">SET WITHDRAWAL BANK ACCOUNT</Link>
            </div>
        </div>
    );
}

export default Wallet;
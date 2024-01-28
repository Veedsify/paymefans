import { X } from "lucide-react";
import { Link } from "react-router-dom";

const ChooseUserName = () => {
    return (
        <div className="min-h-screen p-5 bg-black md:p-7">
            <div className="max-w-screen-xl pt-12 mx-auto mb-24 md:mt-16">
                <Link to="/">
                    <img src="/site/logo.svg" alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col items-start justify-center max-w-screen-xl mx-auto">
                <h1 className="mt-auto mb-5 text-2xl font-bold text-white">Choose your Username</h1>
                <form action="" className="flex-1 w-full mb-5" autoComplete="false" aria-autocomplete="none">
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <div className="flex items-center gap-1 outline outline-white outline-1 rounded-lg px-3">
                            <input type="search" id="name" className="block w-full py-3 font-bold text-white bg-transparent text-sm outline-none accent-primary-dark-pink" placeholder="Username" />
                            <div>
                                <X
                                    className="w-5 h-5 cursor-pointer" stroke="#CC0DF8" strokeWidth={3} size={25} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="block w-full px-3 py-3 text-sm font-bold text-white rounded-lg bg-primary-dark-pink md:max-w-96 disabled:bg-gray-600">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChooseUserName;
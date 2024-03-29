import { useSideBarContext } from "@/lib/pageContexts";
import { LucideBellRing } from "lucide-react";
import HeaderTitle from "../sub_componnets/header_title";

const Header = () => {
    const { setSideBar } = useSideBarContext()
    return (
        <header className="px-4 lg:px-8 py-3 border-b bg-primary-dark-pink lg:bg-white">
            <div className="flex items-center">
                <HeaderTitle />
                <img src="/site/logo3.png" alt="" className="block lg:hidden" />
                <ul className="flex items-center gap-6 ml-auto lg:hidden">
                    <li>
                        <span>
                            <LucideBellRing stroke="#fff" />
                        </span>
                    </li>
                    <li>
                        <span
                            className="block w-12 h-12 border-2 border-white rounded-full cursor-pointer"
                            onClick={() => setSideBar(true)}
                        >
                            <img src="/images/user.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
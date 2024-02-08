import { useModalContext } from "@/lib/pageContexts";
import { LucideHome, LucideMail, LucidePlus, LucideSearch, LucideUser2 } from "lucide-react";
import { Link } from "react-router-dom";

const MenuButtons = () => {
    const { setModal } = useModalContext()

    return (
        <div className="fixed bottom-0 right-0 flex pointer-events-none w-full lg:justify-end">
            <div className="flex p-5 py-7 border-t items-center justify-between px-8 md:px-16 bg-white w-full lg:w-[33.3%] pointer-events-auto">
                <Link to="/" className="cursor-pointer">
                    <LucideHome />
                </Link>
                <span className="cursor-pointer">
                    <LucideSearch />
                </span>
                <span className="cursor-pointer" onClick={() => setModal()} >
                    <LucidePlus />
                </span>
                <Link to="/models" className="cursor-pointer">
                    <LucideUser2 />
                </Link>
                <Link to="/mix/messages" className="cursor-pointer">
                    <LucideMail />
                </Link>
            </div>
        </div>
    );
}

export default MenuButtons;
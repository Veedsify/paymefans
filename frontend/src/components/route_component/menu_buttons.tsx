import { LucideHome, LucideMail, LucidePlus, LucideSearch, LucideUserRoundCog } from "lucide-react";

const MenuButtons = () => {
    return (
        <div className=" left-0 fixed bottom-0 flex lg:justify-end w-full">
            <div className="flex p-5 py-7 border-t items-center justify-between px-8 md:px-16 bg-white w-full lg:w-[36.36%]">
                <span className="cursor-pointer">
                    <LucideHome />
                </span>
                <span className="cursor-pointer">
                    <LucideSearch />
                </span>
                <span className="cursor-pointer">
                    <LucidePlus />
                </span>
                <span className="cursor-pointer">
                    <LucideUserRoundCog />
                </span>
                <span className="cursor-pointer">
                    <LucideMail />
                </span>
            </div>
        </div>
    );
}

export default MenuButtons;
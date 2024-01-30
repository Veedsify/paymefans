import { LucideBellRing } from "lucide-react";

const Header = () => {
    return (
        <header className="border-b py-6 px-8 bg-primary-dark-pink md:bg-white">
            <div className="flex items-center">
                <h1 className="font-bold text-lg hidden md:block">Home</h1>
                <img src="/site/logo3.png" alt="" className="md:hidden block" />
                <ul className="ml-auto flex items-center gap-6 md:hidden">
                    <li>
                        <span>
                            <LucideBellRing stroke="#fff" />
                        </span>
                    </li>
                    <li>
                        <span>
                            <img src="/images/user.png" alt="" />
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
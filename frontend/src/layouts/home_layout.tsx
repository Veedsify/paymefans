import { Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import User_Layouts from "./user_layout";
import SideBar from "@/components/route_component/sidebar";
import SideModels from "@/components/route_component/side_models";
import Header from "@/components/route_component/header";
import MenuButtons from "@/components/route_component/menu_buttons";
import ModalComponent from "@/components/route_component/modalComponent";
import HomeRoutes from "@/routes/home/home";
import ModelsPage from "@/routes/models/models";
import HookupPage from "@/routes/hookup/hookup";
const Home_Layout = () => {
    return (
        <div className="relative grid min-h-screen lg:grid-cols-9">
            <div className="col-span-2">
                <SideBar />
            </div>
            <div className="col-span-7 overflow-auto border-r">
            <Header />
                <div className="grid min-h-screen lg:grid-cols-7 ">
                    <div className="col-span-4 md:border-r">
                        <Routes>
                            <Route path="/mix/*" element={<User_Layouts />} />
                            <Route path="/models/" element={<ModelsPage />} />
                            <Route path="/hookup/" element={<HookupPage />} />
                            <Route path="/" element={<HomeRoutes />} />
                        </Routes>
                    </div>
                    <SideModels />
                </div>
            </div>
            <MenuButtons />
            <ModalComponent />
        </div>
    );
}

export default Home_Layout;
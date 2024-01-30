import BecomeAModel from "@/routes/models/become_a_model";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import User_Layouts from "./user_layout";
import SideBar from "@/components/route_component/sidebar";
import SideModels from "@/components/route_component/side_models";
import Header from "@/components/route_component/header";
import MenuButtons from "@/components/route_component/menu_buttons";
const Home_Layout = () => {
    return (
        <div className="grid lg:grid-cols-8 relative min-h-screen">
            <div className="col-span-2 border-r">
                <SideBar />
            </div>
            <div className="col-span-6 border-r overflow-auto">
                <Header />
                <div className="grid lg:grid-cols-2 min-h-screen    ">
                    <div className="border-r">
                        <Routes>
                            <Route path="/become-a-model" element={<BecomeAModel />} />
                            <Route path="/me/*" element={<User_Layouts />} />
                        </Routes>
                    </div>
                    <SideModels />
                </div>
            </div>
            <MenuButtons />
        </div>
    );
}

export default Home_Layout;
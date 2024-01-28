import HomeRoutes from '@/routes/home/home';
import Profile from '@/routes/profile/profile';
import { Routes, Route } from 'react-router-dom';
const User_Layouts = () => {
    return (
        <>
            <Routes>
                <Route path="/:id" element={<HomeRoutes />} />
                <Route path="/:id/profile" element={<Profile />} />
            </Routes>
        </>
    );
}


export default User_Layouts;
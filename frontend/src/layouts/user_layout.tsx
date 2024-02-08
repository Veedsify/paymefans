import HomeRoutes from '@/routes/home/home';
import Points from '@/routes/points/points';
import Profile from '@/routes/profile/profile';
import Wallet from '@/routes/wallet/wallet';
import Store from '@/routes/store/store';
import { Routes, Route } from 'react-router-dom';
import BecomeAModel from '@/routes/models/become_a_model';
import Chats from '@/routes/chats/chats';
import Messages from '@/routes/messages/messages';
import Models from '@/components/route_component/models';
import Post from '@/routes/post/post';
import Live from '@/routes/live/live';
import Stream from '@/routes/stream/livestream';
import Settings from '@/routes/settings/settings';
import NewPost from '@/routes/post/newpost';
const User_Layouts = () => {
    return (
        <>
            <Routes>
                <Route path="/models/new" element={<BecomeAModel />} />
                <Route path="/chats/:1" element={<Chats />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/models/benefits" element={<Models />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/posts/new" element={<NewPost />} />
                <Route path="/live" element={<Live />} />
                <Route path="/live/:stream_id" element={<Stream />} />
                <Route path="/" element={<HomeRoutes />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/points" element={<Points />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </>
    );
}


export default User_Layouts;
import { Routes, Route } from 'react-router-dom'
import Error404 from './routes/404/error'
import Home_Layouts from './layouts/home_layout'
import Login from './routes/login/login'
import User_Layouts from './layouts/user_layout'
import Register from './routes/register/register'
import { useEffect, useState } from 'react'
import Loader from './components/route_component/loader'
import ChooseUserName from './routes/register/username/username'
import Subscribe from './routes/subscribe/subscribe'
import Verification from './routes/public_verification/verification'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  } else {
    return (
      <div>
        <Routes>
          {/* LAYOUTS */}
          {/* Using "/*" as a path will catch all navigation except those defined before it. Ensure more specific routes are defined above. */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/username" element={<ChooseUserName />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/verification" element={<Verification />} />

          {/* PATHS WITHOUT LAYOUTS */}
          <Route path="/" element={<Home_Layouts />} />
          <Route path="/me/*" element={<User_Layouts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    )
  }
}

export default App
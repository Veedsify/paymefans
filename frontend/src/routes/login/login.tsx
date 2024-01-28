import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="min-h-screen p-5 bg-black md:p-7">
            <div className="max-w-screen-xl pt-12 mx-auto mb-24 md:mt-16">
                <Link to="/">
                    <img src="/site/logo.svg" alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col items-start justify-center max-w-screen-xl mx-auto">
                <h1 className="mt-auto mb-5 text-2xl font-bold text-white">Sign in</h1>
                <form action="" className="flex-1 w-full mb-5">
                    <div className="flex flex-col gap-3 mb-4 md:max-w-96">
                        <input type="email" id="email" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Email" />
                    </div>
                    <div className="flex flex-col gap-3 mb-5 md:max-w-96">
                        <input type="password" id="password" className="block w-full px-3 py-3 text-sm font-bold text-white bg-transparent rounded-lg outline outline-white outline-1" placeholder="Password" />
                    </div>
                    <button className="w-full px-3 py-3 text-sm font-bold text-white rounded-lg bg-primary-dark-pink md:max-w-96">Sign in</button>
                </form>
                <div className="flex items-center justify-between w-full mt-5 md:max-w-96">
                    <div className="flex">
                        <input type="checkbox" name="remember" id="remember" className="mr-2 text-sm accent-primary-dark-pink" />
                        <label htmlFor="remember" className="text-sm font-bold text-white cursor-pointer">Remember me</label>
                    </div>
                    <Link to="/" className="text-sm font-bold text-primary-dark-pink">Forgot password?</Link>
                </div>
                <div className="mt-28">
                    <p className="text-sm font-bold text-white">Don't have an account? <Link to="/register" className="text-primary-dark-pink">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
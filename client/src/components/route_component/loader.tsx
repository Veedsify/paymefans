const Loader = () => {
    return (
        <div className="bg-black min-h-screen w-full flex items-center justify-center">
            <div className="animate-pulse">
                <img src="/site/logo.svg" alt="Loader" className="animate-bounce" />
            </div>
        </div>
    );
}

export default Loader;
const Points = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="font-bold text-2xl mb-10 pt-4">
                    Points
                </h1>
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    <div className="rounded-2xl bg-coins-card-bottom cursor-pointer">
                        <div className="flex py-5 rounded-tr-2xl rounded-tl-2xl items-center gap-2 justify-center bg-white m-[2px]">
                            <img src="/site/coin.svg" alt="" />
                            <h2 className="font-bold text-xl text-primary-dark-pink">5</h2>
                        </div>
                        <div>
                            <h3 className="text-center font-bold text-sm py-3">₦500</h3>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-coins-card-bottom cursor-pointer">
                        <div className="flex py-5 rounded-tr-2xl rounded-tl-2xl items-center gap-2 justify-center bg-white m-[2px]">
                            <img src="/site/coin.svg" alt="" />
                            <h2 className="font-bold text-xl text-primary-dark-pink">10</h2>
                        </div>
                        <div>
                            <h3 className="text-center font-bold text-sm py-3">₦1,000</h3>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-coins-card-bottom cursor-pointer">
                        <div className="flex py-5 rounded-tr-2xl rounded-tl-2xl items-center gap-2 justify-center bg-white m-[2px]">
                            <img src="/site/coin.svg" alt="" />
                            <h2 className="font-bold text-xl text-primary-dark-pink">15</h2>
                        </div>
                        <div>
                            <h3 className="text-center font-bold text-sm py-3">₦1,500</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Points;
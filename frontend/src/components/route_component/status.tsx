import { LucidePlus } from "lucide-react";

const StatusComponent = () => {
    return (
        <div className="select-none border-b">
            <div className="flex items-center gap-4 overflow-x-auto lg:overflow-hidden lg:hover:overflow-x-auto w-screen md:w-full p-4 py-6 pb-9 clean-sidebar">
                <UserStatus data={{ image: "/images/user.png", story: "" }} />
                <Status islive={true} data={{ image: "/images/login_image.png", story: "", name: "the_artgetteedfrw4escsdcsfer" }} />
                <Status islive={false} data={{ image: "/images/profilecover.png", story: "", name: "bridgette" }} />
                <Status islive={true} data={{ image: "/images/profilecover.png", story: "", name: "thora" }} />
                <Status islive={false} data={{ image: "/images/profilecover.png", story: "", name: "kimberly" }} />
                <Status islive={false} data={{ image: "/images/profilecover.png", story: "", name: "bridgette" }} />
                <Status islive={true} data={{ image: "/images/register_image.png", story: "", name: "focbos" }} />
                <Status islive={false} data={{ image: "/images/register_image.png", story: "", name: "jennermarbles" }} />
                <Status islive={true} data={{ image: "/images/register_image.png", story: "", name: "tysoncreamte" }} />
                <Status islive={false} data={{ image: "/images/register_image.png", story: "", name: "mitchell" }} />
                <Status islive={true} data={{ image: "/images/register_image.png", story: "", name: "crymson_tims" }} />
            </div>
        </div>
    );
}


export const Status = ({ islive, data }: {
    islive: boolean;
    data: {
        image: string;
        story: string;
        name: string;
    }
}) => {
    return (
        <div>
            <div className="block relative">
                <div className="flex items-center bg-gray-300 flex-shrink-0 justify-center cursor-pointer rounded-full aspect-square h-20 w-20 md:h-24 md:w-24 relative mb-2">
                    <div className="flex p-[5px] bg-white items-center justify-center rounded-full">
                        <img src={data.image} className="rounded-full border-4 border-gray-300 object-cover h-16 md:h-20 aspect-square" alt="" />
                    </div>
                    {islive && (
                        <div className="rounded-md p-1 bg-primary-text-dark-pink text-white text-xs border border-white absolute -bottom-2 scale-90">
                            <p className="text-xs font-bold">LIVE</p>
                        </div>
                    )}
                </div>
                <div className="text-xs md:text-sm left-1/2 -translate-x-1/2 absolute font-medium text-gray-600 text-center text-truncate max-w-20 overflow-hidden">
                    {data.name}
                </div>
            </div>
            {/* <StatusModal /> */}
        </div>
    );
}
export const UserStatus = ({ data }: {
    data: {
        image: string;
        story: string;
    }
}) => {
    return (
        <div className="block relative">
            <div className="flex items-center bg-gray-300 flex-shrink-0 justify-center cursor-pointer rounded-full aspect-square h-20 w-20 md:h-24 md:w-24 relative mb-2">
                <div className="flex p-[5px] bg-white items-center justify-center rounded-full">
                    <img src={data.image} className="rounded-full object-cover border-4 border-gray-300 h-16 md:h-20 aspect-square" alt="" />
                </div>
                <div className="p-1 bg-blue-400 text-white text-xs border-4 border-white absolute -bottom-0 right-0 scale-90 rounded-full">
                    <LucidePlus stroke="#fff" size={15} strokeWidth={3} />
                </div>
            </div>
            <div className="text-xs md:text-sm left-1/2 -translate-x-1/2 font-medium absolute text-gray-600 text-center text-truncate whitespace-pre w-20 overflow-hidden">
                Your status
            </div>
        </div>
    );
}

export const StatusModal = () => {
    return (
        <>
            <div className="fixed bg-black bg-opacity-30 inset-0 z-50">
                <div className="py-3">

                </div>
            </div>
        </>
    )
}

export default StatusComponent;
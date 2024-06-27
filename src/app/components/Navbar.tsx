import React from "react";
import {
    JobsIcon,
    MessagesIcon,
    NotificationIcon,
    PaymentIcon,
    MessagesIconNotification,
    ProfileWithChevron,
    NotificationIconTrue,
 
} from "../assets/Icons";
import LogoAtlassian from "../assets/LogoAtlassian.png";

const navItems = [
    { Icon: JobsIcon, label: "Jobs" },
    { Icon: MessagesIconNotification, label: "Messages" },
    { Icon: PaymentIcon, label: "Payments" },
];

const Navbar = () => {
    return (
        <>
            <nav className="bg-white flex px-10 flex-row justify-between items-center h-fit p-4 border-b-[1px] ">
                <div>
                    <p className="bg-neutral-gray py-2 px-7 inline-block text-orange-300 font-bold text-xl h-fit">
                        Logo
                    </p>
                </div>
                <div className="rounded-[36px] border border-2-black w-fit flex flex-row gap-3  justify-between items-center p-2">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="group hover:bg-orange-300 text-neutral-gray-300 px-4 py-2 hover:text-white flex flex-row items-center gap-2 hover:outline hover:outline-[#FCB4A5] rounded-[48px]"
                        >
                            <item.Icon hasNotification={true} />
                            <span className="group-hover:text-white font-brand">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row gap-4">
                    <NotificationIconTrue hasNotification={true} />
                    <ProfileWithChevron imageSrc={LogoAtlassian} />
                </div>
            </nav>
        </>
    );
};

export default Navbar;

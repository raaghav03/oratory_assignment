"use client";
import React, { useState } from "react";
import {
  JobsIcon,
  MessagesIcon,
  PaymentIcon,
  NotificationIconTrue,
  ProfileWithChevron,
} from "../assets/Icons";
import LogoAtlassian from "../assets/LogoAtlassian.png";

const navItems = [
  { Icon: JobsIcon, label: "Jobs" },
  { Icon: MessagesIcon, label: "Messages", hasNotification: true },
  { Icon: PaymentIcon, label: "Payments" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Jobs");

  return (
    <nav className="bg-white flex px-10 flex-row justify-between items-center h-fit p-4 border-b-[1px]">
      <div>
        <p className="bg-neutral-gray py-2 px-7 inline-block text-orange-300 font-bold text-xl h-fit">
          Logo
        </p>
      </div>
      <div className="rounded-[36px] border border-2-black w-fit flex flex-row gap-3 justify-between items-center p-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`group px-4 py-2 flex flex-row items-center gap-2 rounded-[48px] cursor-pointer ${
              activeItem === item.label
                ? "bg-orange-300 text-white outline outline-[#FCB4A5]"
                : "text-neutral-gray-300"
            }`}
            onClick={() => setActiveItem(item.label)}
          >
            <item.Icon
              className={`${activeItem === item.label ? "stroke-white" : ""}`}
            />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        <NotificationIconTrue hasNotification={true} />
        <ProfileWithChevron imageSrc={LogoAtlassian} />
      </div>
    </nav>
  );
};

export default Navbar;

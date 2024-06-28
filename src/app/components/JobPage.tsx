import React from "react";
import Image from "next/image";
import {
    Dot,
    GreenBadgeDot,
    Location,
    Coins,
    Figma,
    Illustrator,
    XD,
    User,
    Matches,
    Messages,
    Views,
    Delete,
    Edit,
    Seperator,
} from "../assets/Icons";
import Logo from "../assets/Rectangle43.svg"
import { TabNav } from "@radix-ui/themes";
const JobPage = () => {
    return (
        <>
            <div className="flex flex-row gap-0">
                <div className="w-3/4">
                    <div className="bg-white justify-between items-center h-fit  border-b-[1px]">
                        <div className="px-24 py-9 border-b-[1px] border-neutral-gray">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="text-3xl text-neutral-gray-5 font-semibold font-brand">
                                        Senior Product Designer
                                    </div>
                                    <Dot />
                                    <div className="text-neutral-gray-4 font-medium font-brand text-sm">
                                        posted 2 days ago
                                    </div>
                                    <div className="bg-success-50 font-brand flex text-xs rounded-full border-[1px] border-success-200 flex-row gap-1 items-center pl-1.5 pr-2 text-success-700 font-medium py-0.5">
                                        <GreenBadgeDot />
                                        Open
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="flex-row flex gap-2 font-brand text-neutral-gray-3">
                                        <Location />
                                        Delaware, USA
                                    </div>
                                    <Dot />
                                    <div className="flex-row flex gap-2 font-brand text-neutral-gray-3 ">
                                        <Coins />
                                        $300k-$400k
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-16 px-24 py-9">
                            <div className="flex flex-col gap-2">
                                <div className="font-brand text-neutral-gray-1 font-medium text-sm">
                                    Skills Required
                                </div>
                                <div className="font-brand text-neutral-gray-5 flex flex-col gap-2 font-medium text-base">
                                    <div className="flex font-brand flex-row items-center px-1.5 gap-1 py-1 w-fit border-color-primary border-[1px] rounded-md">
                                        <Figma />
                                        Figma
                                    </div>
                                    <div className="flex flex-row font-brand items-center px-1.5 gap-[4px] py-1 w-fit border-color-primary border-[1px] rounded-md">
                                        <Illustrator />
                                        Adobe Illustrator
                                    </div>
                                    <div className="flex flex-row font-brand items-center px-1.5 gap-1 py-1 w-fit border-color-primary border-[1px] rounded-md">
                                        <XD />
                                        Adobe XD
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className=" font-brand text-neutral-gray-1 font-medium text-sm">
                                    Preferred Language
                                </div>
                                <div className="font-brand text-neutral-gray-5 font-semibold text-base">
                                    English{" "}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-brand text-neutral-gray-1 font-medium text-sm">
                                    Type{" "}
                                </div>
                                <div className="font-brand text-neutral-gray-5 font-semibold text-base">
                                    Full time{" "}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-brand text-neutral-gray-1 font-medium text-sm">
                                    Years of Experience{" "}
                                </div>
                                <div className="font-brand text-neutral-gray-5 font-semibold text-base">
                                    3+ Years of Experience{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-24 py-9 border-b-[1px] border-neutral-gray">
                        <div className="font-brand text-neutral-gray-1 font-medium text-sm flex flex-col gap-2">
                            <div className="font-brand text-neutral-gray-1 font-medium text-sm">
                                About the job
                            </div>
                            <div className="text-base font-brand leading-7 text-neutral-gray-5 font-medium">
                                1. Handle the UI/UX research design<br></br>
                                2. Work on researching on latest web applications designs &
                                trends
                                <br></br>
                                3. Work on conceptualizing and visualizing<br></br>
                                4. Work on creating graphics content and other graphic related
                                works
                                <br></br>
                                Benefits:<br></br>• Health insurance<br></br>• Provident Fund
                                <br></br>
                                Schedule:<br></br>• Day shift<br></br>
                                Supplemental pay types:<br></br>• Performance bonus<br></br>•
                                Yearly bonus<br></br>
                                Work Location: In person<br></br>
                            </div>
                        </div>
                    </div>
                    <div className="px-24 py-9 gap-4 flex flex-col">
                        {" "}
                        <div className="flex items-center gap-3 py-2.5 flex-row">
                            <Image src={Logo} alt="attlasian logo" width={40} height={40} />
                            <div className="font-medium text-brand-gray font-brand text-xl">Atlassian</div></div>
                        <div className="grid grid-cols-2  gap-y-6">
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit   font-medium text-sm">
                                    Company size
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    1k - 2k Employees
                                </div>
                            </div>{" "}
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit font-medium text-sm">
                                    Type
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    Private
                                </div>
                            </div>{" "}
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit font-medium text-sm">
                                    Sector
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    Information Technology, Infrastructure
                                </div>
                            </div>{" "}
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit font-medium text-sm">
                                    Funding
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    Bootstrapped
                                </div>
                            </div>{" "}
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit font-medium text-sm">
                                    Founded In
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    2019
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-fit">
                                <div className="font-brand text-neutral-gray-1 inline w-fit font-medium text-sm">
                                    Founded By
                                </div>
                                <div className="font-brand text-neutral-gray-5 inline w-fit font-medium text-base">
                                    Scott Farquhar, Mike Cannon-Brookes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" border-l-[1px] border-neutral-gray w-1/4 px-6 py-9 flex flex-col gap-6">
                    <div className="flex flex-row items-center justify-between">
                        <button className="flex font-brand flex-row gap-[10px] py-3 px-6 bg-orange-bg items-center text-orange-300 font-medium text-base rounded-lg border-[1px] border-orange-300">
                            <Delete />
                            Delete Job
                        </button>
                        <button className="flex font-brand flex-row gap-[10px] py-3 px-6 bg-orange-300 items-center text-white font-medium text-base rounded-lg border-2 border-orange-stroke">
                            <Edit />
                            Edit job
                        </button>
                    </div>
                    <div className="p-3 flex flex-col gap-4">
                        <div className="flex flex-row items-center text-brand-gray p-[10px] justify-between w-full">
                            <div className="flex flex-row items-center font-medium gap-[10px]">
                                {" "}
                                <User /> <div className="text-base font-brand">Applicants</div>
                            </div>
                            <div className="text-xl font-semibold text-neutral-gray-5 font-brand">
                                400
                            </div>
                        </div>
                        <Seperator />
                        <div className="flex flex-row items-center font-brand text-brand-gray p-[10px] justify-between w-full">
                            <div className="flex flex-row items-center font-medium gap-[10px]">
                                {" "}
                                <Matches /> <div className="text-base font-brand">Matches</div>
                            </div>
                            <div className="text-xl font-semibold text-neutral-gray-5 font-brand">
                                100
                            </div>
                        </div>
                        <Seperator />
                        <div className="flex flex-row items-center font-brand text-brand-gray p-[10px] justify-between w-full">
                            <div className="flex flex-row items-center font-medium gap-[10px]">
                                {" "}
                                <Messages /> <div className="text-base font-brand">Messages</div>
                            </div>
                            <div className="text-xl font-semibold font-brand text-neutral-gray-5">
                                147
                            </div>
                        </div>
                        <Seperator />
                        <div className="flex flex-row items-center text-brand-gray p-[10px] justify-between w-full">
                            <div className="flex flex-row items-center font-brand font-medium gap-[10px]">
                                {" "}
                                <Views /> <div className="text-base font-brand">Views</div>
                            </div>
                            <div className="text-xl font-semibold font-brand text-neutral-gray-5">
                                800
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPage;

"use client";
import React, { useState } from "react";

interface TabOptionProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const TabOption: React.FC<TabOptionProps> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-5 font-brand text-xl  relative ${isActive ? "text-orange-300 font-semibold" : "text-neutral-gray-4 font-medium"
            }`}
    >
        {label}
        {isActive && (

            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-300"></span>
        )}
    </button>
);

const JobPreviewTabs = () => {
    const [activeTab, setActiveTab] = useState("Job preview");
    const tabs = ["Job preview", "Applicants", "Match", "Messages"];

    return (
        <div className="border-b px-24   border-gray-200">
            <nav className="-mb-px flex ">
                {tabs.map((tab) => (
                    <TabOption
                        key={tab}
                        label={tab}
                        isActive={activeTab === tab}
                        onClick={() => setActiveTab(tab)}
                    />
                ))}
            </nav>
        </div>
    );
};

export default JobPreviewTabs;

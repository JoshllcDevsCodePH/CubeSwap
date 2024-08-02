    import React from "react";
    import coinsmall from "../images/coinsmall.webp";

    const ReferralItem = ({ user, formatNumber }) => {
    if (!user) return null; // Ensure user is defined

    return (
        <div
        key={user.id}
        className="bg-cards rounded-[10px] p-[14px] flex flex-wrap justify-between items-center"
        >
        <div className="flex flex-1 flex-col space-y-1">
            <div className="text-[#fff] pl-1 text-[16px] font-semibold">
            {user.username || 'No Username'} {/* Default if username is missing */}
            </div>
            <div className="flex items-center space-x-1 text-[14px] text-[#e5e5e5]">
            <div className="">
                <img src={user.level.imgUrl} alt="level" className="w-[18px]" />
            </div>
            <span className="font-medium text-[#9a96a6]">
                {user.level.name || 'No Level'} {/* Default if level name is missing */}
            </span>
            <span className="bg-[#bdbdbd] w-[1px] h-[13px] mx-2"></span>
            <span className="w-[20px]">
                <img
                src={coinsmall}
                className="w-full"
                alt="coin"
                />
            </span>
            <span className="font-normal text-[#ffffff] text-[15px]">
                {formatNumber(user.balance) || '0'}
            </span>
            </div>
        </div>
        <div className="text-[#ffce68] font-semibold text-[14px]">
            +{formatNumber(user.balance / 100 * 10) || '0'}
        </div>
        <div className="flex w-full mt-2 p-[4px] items-center bg-energybar rounded-[10px] border-[1px] border-borders">
            <div className="h-[10px] rounded-[8px] bg-btn w-[.5%]"></div>
        </div>
        </div>
    );
    };

    export default ReferralItem;

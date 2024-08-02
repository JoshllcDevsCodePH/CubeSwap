    import React, { useState } from "react";

    const InviteLink = ({ id, copyToClipboard, copied }) => {
    const reflink = `https://t.me/cube_swap_bot?start=r${id}`;

    return (
        <div className="w-full bg-cards rounded-[12px] px-3 py-4 flex flex-col">
        <span className="w-full flex justify-between items-center pb-2">
            <h2 className="text-[18px] font-semibold">My invite link:</h2>
            <span
            onClick={() => copyToClipboard(reflink)}
            className="bg-gradient-to-b from-[#399918] to-[#0b62c4] font-medium py-[6px] px-4 rounded-[12px] flex items-center justify-center text-[16px]"
            >
            {copied ? <span>Copied!</span> : <span>Copy</span>}
            </span>
        </span>
        <div className="text-[#9a96a6] text-[13px]">
            {reflink}
        </div>
        </div>
    );
    };

    export default InviteLink;

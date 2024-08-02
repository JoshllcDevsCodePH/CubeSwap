import React, { useState } from "react";
import Animate from "../Components/Animate";
import { Outlet } from "react-router-dom";
import coinsmall from "../images/coinsmall.webp";
import { useUser } from "../context/userContext";

const Stats = () => {
  const { dividedCount, users, dividedUsers } = useUser();
  const [walletConnected, setWalletConnected] = useState(false);
  const [showAirdrop, setShowAirdrop] = useState(false);
  const [showAirdropMessage, setShowAirdropMessage] = useState(false);

  const formatNumber = (num) => {
    if (num < 100000) {
      return new Intl.NumberFormat().format(num).replace(/,/g, " ");
    } else if (num < 1000000) {
      return new Intl.NumberFormat().format(num).replace(/,/g, " ") + " K";
    } else {
      return (num / 1000000).toFixed(3).replace(".", ".") + " M";
    }
  };

  const formattedUsers = new Intl.NumberFormat()
    .format(users)
    .replace(/,/g, " ");

  const formattedDividedUsers = new Intl.NumberFormat()
    .format(dividedUsers)
    .replace(/,/g, " ");

  const connectWallet = () => {
    if (!walletConnected) {
      setShowAirdropMessage(true); // Show dialog message
    } else {
      setWalletConnected(false); // Disconnect wallet (if needed)
      setShowAirdrop(false); // Hide airdrop message
    }
    setWalletConnected(!walletConnected); // Toggle wallet connection state
  };

  const handleCloseAirdropMessage = () => {
    setShowAirdropMessage(false); // Close dialog message
  };

  return (
    <>
      <Animate>
        <div className="w-full justify-center flex-col space-y-3 px-5">
          <div className="fixed top-0 left-0 right-0 pt-8 px-5">
            <div className="w-full items-center justify-center pb-3 flex pt-2">
              <h2 className="text-[#9d99a9] text-[20px] font-medium">
                Wallet Withdrawal
              </h2>
            </div>
            <div className="flex space-x-1 ml-[-8px] justify-center items-center">
              <div className="w-[50px] h-[50px]">
                <img src={coinsmall} className="w-full" alt="coin" />
              </div>
              <h1 className="text-[#fff] text-[42px] font-extrabold">
                {showAirdrop && "Coming soon airdrop"}
              </h1>
            </div>

            <div className="bg-[#362c4d] w-full px-5 h-[1px] !mt-5 !mb-5"></div>

            <div className="w-full items-center flex flex-col space-y-2">
              <h3 className="text-[16px] text-[#9d99a9] items-center font-semibold pb-4 flex flex-col">
                <span>Your wallet:</span>
                {walletConnected ? (
                  <span className="text-[#fff] font-semibold text-[24px]">
                    Wallet Connected
                  </span>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={connectWallet}
                  >
                    {showAirdrop ? "Coming soon airdrop" : "Connect Wallet"}
                  </button>
                )}
              </h3>
            </div>
          </div>
        </div>
        <Outlet />
      </Animate>

      {/* Popup dialog */}
      {showAirdropMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-[#222831] p-8 rounded-lg text-center text-white">
            <p className="text-xl font-semibold mb-4">
              The Airdrop is on August 30
            </p>
            <p className="text-sm mb-4">
              To be eligible for the airdrop, you must meet the following criteria:
            </p>
            <ul className="text-left mb-4">
              <li>Cubes owned: At least 50M to 100M</li>
              <li>Your level: Diamond or Master</li>
              <li>Invites: At least 5 Players</li>
              <li>Completed tasks</li>
            </ul>
            <p className="text-sm mb-6">
              Make sure you fulfill these requirements to participate in our upcoming airdrop event on August 30.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 width:100% text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseAirdropMessage}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;

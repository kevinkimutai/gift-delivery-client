import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiEBikeLine } from "react-icons/ri";
import { GiSnail } from "react-icons/gi";

const DeliveryTabs = () => {
  return (
    <div className="ml-8 flex justify-start items-center mb-8">
      <div className="flex justify-center items-center px-4 py-2 bg-purple-500 rounded-xl cursor-pointer mr-2">
        <HiOutlineRocketLaunch className="mr-2 text-white" />
        <span className="text-white">Same-Day</span>
      </div>

      <div className="flex justify-center items-center px-4 py-2 border border-purple-500 rounded-xl cursor-pointer mr-2">
        <RiEBikeLine className="mr-2 text-purple-500" />
        <span className="text-purple-500">Express</span>
      </div>

      <div className="flex justify-center items-center px-4 py-2 border border-purple-500 rounded-xl cursor-pointer mr">
        <GiSnail className="mr-2 text-purple-500" />
        <span className="text-purple-500">Normal</span>
      </div>
    </div>
  );
};

export default DeliveryTabs;

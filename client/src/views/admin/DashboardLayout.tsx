import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Logo from "../../assets/img/gift-logo.png";

import {
  HiHomeModern,
  HiDocumentArrowUp,
  HiCalculator,
  HiCurrencyDollar,
  HiUserGroup,
  HiPhoto,
  HiSquaresPlus,
  HiUserCircle,
} from "react-icons/hi2";

import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = () => {
  const [active, setActive] = useState(true);
  return (
    <section className="relative flex items-start w-full overflow-x-hidden overflow-y-scroll h-screen ">
      <aside className="fixed top-0 bottom-0 bg-yellow-200 w-[10rem] ">
        <div className="flex justify-center items-center mb-8 ">
          <img src={Logo} alt="logo" className="w-14 mr-2" />
          <span className="text-lg text-purple-700 italic font-bold">
            Giftr
          </span>
        </div>

        {/*TODO: ADD ICONS AND DROP DOWNS FOR SIDEBAR */}
        <ul className="text-slate-600 flex flex-col justify-center items-center mb-28 ">
          <li
            className={`flex justify-center items-center py-2 cursor-pointer ${
              active ? "bg-purple-500 rounded-md px-6 text-white" : ""
            }`}
          >
            <span className="mr-1">
              <HiHomeModern />
            </span>
            Dashboard
          </li>
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiDocumentArrowUp />
            </span>
            Orders
          </li>
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiCalculator />
            </span>
            Stocks
          </li>
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiCurrencyDollar />
            </span>
            Finance
          </li>
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiUserGroup />
            </span>
            Users
          </li>
        </ul>

        <ul className="text-slate-600 flex flex-col justify-center items-center">
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiPhoto />
            </span>
            Banners
          </li>
          <li className="flex justify-center items-center py-2 cursor-pointer">
            <span className="mr-1">
              <HiSquaresPlus />
            </span>
            Gifts
          </li>
        </ul>
      </aside>

      <main className="w-full ml-[10rem]">
        <nav className="w-full sticky top-0 z-10 flex justify-end items-center bg-purple-400 p-4 text-white shadow-sm">
          <span className="flex justify-center items-center cursor-pointer">
            <HiUserCircle className="text-2xl mr-1" /> Andrew Admin
          </span>
        </nav>
        <ToastContainer />
        <section className="p-2">
          <Outlet />
        </section>
      </main>
    </section>
  );
};

export default DashboardLayout;

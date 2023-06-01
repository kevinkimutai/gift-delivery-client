import React from "react";
import { HiBars3BottomRight, HiUser, HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Image from "../assets/img/gift-logo.png";

const ShopNavigation = () => {
  const quantity = useSelector((state: any) => state.cartItems.quantity);

  return (
    <section className="flex items-center justify-between px-10 py-2 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <HiBars3BottomRight className="text-4xl mr-6 cursor-pointer" />
        <Link to="/">
          <img
            src={Image}
            alt="logo"
            className="w-[2.5rem] object-contain mr-3 hidden sm:block"
          />
        </Link>
        <span className="italic text-xl font-semibold text-purple-700 hidden sm:block ">
          Giftr
        </span>
      </div>
      <div className="">
        <input
          placeholder="search for your favourite gift..."
          className="border border-purple-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-sky-500 w-[15rem] xs:w-[20rem] md:w-[25rem] lg:w-[30rem] p-2"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-6">
          <HiUser className="mr-1" />
          {/*TODO:COME BACK TO USER */}
          <span className="text-purple-700 cursor-pointer hidden md:block">
            User
          </span>
        </div>
        <div className="flex justify-center items-center">
          <HiShoppingCart className="mr-1" />

          <Link to={"/user/cart"} className="relative cursor-pointer">
            <span className="text-purple-700 hidden md:block">Cart</span>
            {quantity && quantity !== 0 && (
              <span className="text-xs p-2 text-white justify-center items-center animate-bounce absolute inline-flex h-full w-full -top-3 -right-3 rounded-full bg-purple-600 opacity-75">
                {quantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopNavigation;

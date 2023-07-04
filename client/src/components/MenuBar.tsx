import React, { Fragment } from "react";
import {
  HiBars3BottomRight,
  HiHome,
  HiFire,
  HiScale,
  HiBarsArrowUp,
  HiOutlineQuestionMarkCircle,
  HiDevicePhoneMobile,
  HiUser,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const menuNav = [
  {
    icon: <HiHome className="mr-2" />,
    label: "Home",
    link: "/",
  },
  {
    icon: <HiFire className="mr-2" />,
    label: "New Arrivals",
    link: "/",
  },
  {
    icon: <HiScale className="mr-2" />,
    label: "Sales/Deals",
    link: "/",
  },
  {
    icon: <HiBarsArrowUp className="mr-2" />,
    label: "Best Sellers",
    link: "/",
  },
  {
    icon: <HiOutlineQuestionMarkCircle className="mr-2" />,
    label: "About Us",
    link: "/",
  },
  {
    icon: <HiOutlineShoppingCart className="mr-2" />,
    label: "Orders",
    link: "/",
  },
  {
    icon: <HiUser className="mr-2" />,
    label: "My Account",
    link: "/",
  },
  {
    icon: <HiDevicePhoneMobile className="mr-2" />,
    label: "Mobile App Download",
    link: "/",
  },
];

const MenuBar = () => {
  return (
    <Menu as="div" className="relative z-[80]">
      <Menu.Button>
        <HiBars3BottomRight className="text-2xl mr-0 sm:mr-6 cursor-pointer" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute p-2 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 w-full">
            {menuNav.map((menu) => (
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={menu.link}
                      className={`flex items-center w-full p-1 ${
                        active ? "bg-purple-500 text-white" : ""
                      }`}
                    >
                      {menu.icon}
                      {menu.label}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuBar;

import React, { useState } from "react";
import ShopNavigation from "./ShopNavigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { HiPlusSmall, HiTrash } from "react-icons/hi2";

const Shipping = () => {
  const cartItems = useSelector((state: any) => state.cartItems.cartItems);
  const [totalPrice, setTotalPrice] = useState<number>();
  const dispatch = useDispatch();

  return (
    <>
      <ShopNavigation />
      <section className="px-4 sm:px-10 py-5 bg-gradient-to-r from-yellow-200 to-white overflow-hidden min-h-screen w-screen">
        <h1 className="font-semibold text-purple-600 text-2xl mb-4">
          Shipping Address
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-col-reverse md:flex-row  w-full shadow-md p-2 lg:p-5 bg-white rounded-xl">
            <div className="flex flex-col h-full w-full md:w-2/3"></div>
            <div className="w-full  md:w-1/3 ml-auto p-4 mb-4">
              <div className="p-5 bg-purple-500 h-fit w-full rounded-xl">
                <h1 className="text-xl underline underline-offset-8 text-white font-semibold mb-5">
                  Order Summary
                </h1>
                <div className="flex justify-between items-center text-white mb-3">
                  <p>SubTotal:</p>
                  <p>
                    <span className=" font-semibold mr-2">Kshs</span>
                    <span className="font-semibold text-md">{totalPrice}</span>
                  </p>
                </div>

                {/* <table className="table-auto">
                  <thead>
                    <tr>
                      <th>Gift</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jordans Retro R3</td>
                      <td>4500</td>
                      <td>1</td>
                      <td>4500</td>
                    </tr>
                    <tr>
                      <td>Jordans Retro R3</td>
                      <td>4500</td>
                      <td>1</td>
                      <td>4500</td>
                    </tr>
                  </tbody>
                </table> */}

                <div className="max-h-[40vh] relative overflow-scroll shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Product name
                        </th>
                        <th scope="col" className="px-6 bg-gray-400 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-400 ">
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-red-700">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Silver
                        </td>
                        <td className="px-6 py-4 bg-gray-400 text-gray-900">
                          Laptop
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium">
                          $2999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center text-white mt-9 mb-4">
                  <p>Delivery Fee:</p>
                  <p>
                    <span className=" font-semibold mr-2">Kshs</span>
                    <span className="font-semibold text-md">0</span>
                  </p>
                </div>
                <div className="flex justify-between items-center text-white mb-4 ">
                  <p>VAT:</p>
                  <p>
                    <span className=" font-semibold mr-2">Kshs</span>
                    <span className="font-semibold text-md">0</span>
                  </p>
                </div>

                <div className="flex justify-between items-center p-2  bg-gray-50 dark:text-white dark:bg-gray-800  text-gray-900 font-medium mb-9">
                  <p className="text-lg font-semibold">TOTAL:</p>
                  <p>
                    <span className=" font-semibold mr-2">Kshs</span>
                    <span className="font-bold text-lg">{totalPrice}</span>
                  </p>
                </div>
                <button className="bg-white w-full rounded-md text-purple-600 font-semibold p-2">
                  PAYMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;

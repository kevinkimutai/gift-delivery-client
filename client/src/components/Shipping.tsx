import React, { useState } from "react";
import ShopNavigation from "./ShopNavigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  HiAtSymbol,
  HiOutlineUser,
  HiPlusSmall,
  HiTrash,
} from "react-icons/hi2";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneNumberInput from "./PhoneNumberInput";
import DeliveryTabs from "./DeliveryTabs";
import { MdOutlineLocationSearching } from "react-icons/md";

const Shipping = () => {
  const cartItems = useSelector((state: any) => state.cartItems.cartItems);
  const [totalPrice, setTotalPrice] = useState<number>();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("*first name is required"),
      lname: Yup.string().required("*last name is required"),
      email: Yup.string().email("Invalid email").required("*email is required"),
      phoneNumber: Yup.number().required("*price is required"),
      address: Yup.number().required("*quantity is required"),
      geolocation: Yup.string().test(
        "valid-geolocation",
        "Invalid geolocation format",
        (value: any) => {
          // Define your geolocation validation logic here
          // For example, you can use regular expressions to validate the format
          //@ts-ignore
          const geolocationRegex = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/;
          return geolocationRegex.test(value);
        }
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      // const featuresArray = Object.values(giftFeatures);
      // try {
      //   await addNewGift({
      //     variables: {
      //       image: previewImage,
      //       name: values.name,
      //       category: values.category,
      //       price: +values.price,
      //       countInStock: values.quantity,
      //       description: {
      //         text: values.description,
      //         features: featuresArray,
      //       },
      //     },
      //   }).then(() =>
      //     toast.success("Gift successfully added!!", {
      //       position: toast.POSITION.TOP_CENTER,
      //     })
      //   );
      //   setFeaturesIndex([1, 2]);
      //   setPreviewImage("");
      //   resetForm();
      // } catch (error) {
      //   console.error(error);
      // }
    },
  });

  return (
    <>
      <ShopNavigation />
      <section className="px-4 sm:px-10 py-5 bg-gradient-to-r from-yellow-200 to-white overflow-hidden min-h-screen w-full">
        <div className="flex justify-center">
          <div className="flex flex-col-reverse md:flex-row  w-full shadow-md p-2 lg:p-5 bg-white rounded-xl">
            <div className="flex flex-col h-full w-full md:w-2/3 ">
              <form
                className=" shadow-md w-full flex flex-col p-8 rounded-md mt-8  "
                onSubmit={formik.handleSubmit}
              >
                {/* INPUT DETAILS */}

                <h1 className="font-semibold text-purple-600 text-lg mb-4">
                  Shipping Address
                </h1>
                {/* FIRST NAME */}
                <div className="flex justify-center items-center mb-4 w-full">
                  <div className="flex justify-center items-center mr-10  w-1/2">
                    <label className="mr-4">
                      <HiOutlineUser />
                    </label>
                    <div className="flex flex-1 flex-col">
                      <input
                        id="name"
                        className="bg-purple-200 p-2 rounded-md w-full  focus:outline-none focus:ring-1 focus:ring-sky-400 focus:bg-transparent"
                        placeholder="First Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.fname}
                      />
                      {formik.touched.fname && formik.errors.fname ? (
                        <div className="flex justify-end">
                          <p className="text-red-600">{formik.errors.fname}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* LAST NAME */}
                  <div className="flex justify-center items-center  w-1/2">
                    <label className="mr-4">
                      <HiOutlineUser />
                    </label>
                    <div className="flex flex-1 flex-col">
                      <input
                        id="name"
                        className="bg-purple-200 p-2 rounded-md w-full  focus:outline-none focus:ring-1 focus:ring-sky-400 focus:bg-transparent"
                        placeholder="Last name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lname}
                      />
                      {formik.touched.lname && formik.errors.lname ? (
                        <div className="flex justify-end">
                          <p className="text-red-600">{formik.errors.lname}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* PHONENUMBER */}
                <div className="flex justify-center items-center mb-8 w-full">
                  <PhoneNumberInput />

                  {/* EMAIL*/}
                  <div className="flex justify-center items-center  w-1/2">
                    <label className="mr-4">
                      <HiAtSymbol />
                    </label>
                    <div className="flex flex-1 flex-col">
                      <input
                        id="name"
                        className="bg-purple-200 p-2 rounded-md w-full  focus:outline-none focus:ring-1 focus:ring-sky-400 focus:bg-transparent"
                        placeholder="Email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="flex justify-end">
                          <p className="text-red-600">{formik.errors.email}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <DeliveryTabs />

                <div className="flex mb-12 w-full">
                  <div className="flex justify-center items-center  w-1/2 mr-10 ">
                    <label className="mr-4">
                      <MdOutlineLocationSearching />
                    </label>
                    <div className="flex flex-1 flex-col">
                      <textarea
                        id="name"
                        className="bg-purple-200 p-2 rounded-md w-full  focus:outline-none focus:ring-1 focus:ring-sky-400 focus:bg-transparent"
                        placeholder="Location description"
                        onBlur={formik.handleBlur}
                        rows={5}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="flex justify-end">
                          <p className="text-red-600">{formik.errors.email}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="flex justify-center items-center  w-1/2">
                    <label className="mr-4">
                      <MdOutlineLocationSearching />
                    </label>
                    <div className="flex flex-1 flex-col">
                      <input
                        id="name"
                        className="bg-purple-200 p-2 rounded-md w-full  focus:outline-none focus:ring-1 focus:ring-sky-400 focus:bg-transparent"
                        placeholder="Location description"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="flex justify-end">
                          <p className="text-red-600">{formik.errors.email}</p>
                        </div>
                      ) : null}
                    </div>
                  </div> */}
                </div>

                {/* <div className="flex justify-center items-center mt-10">
                  <button
                    className="bg-sky-400 text-white rounded-md py-3 px-6"
                    type="submit"
                  >
                    Submit
                  </button>
                </div> */}
                <button className="py-3 px-6 bg-purple-500 text-white rounded-xl">
                  Continue To Payment
                </button>
              </form>
            </div>

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
                    <tbody className="">
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
                {/* <button className="bg-white w-full rounded-md text-purple-600 font-semibold p-2">
                  PAYMENT
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;

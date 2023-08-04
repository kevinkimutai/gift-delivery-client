import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center items-center  w-1/2 mr-10">
      <PhoneInput
        defaultCountry="KE"
        placeholder="Enter phone number"
        value={value}
        //@ts-ignore
        onChange={setValue}
      />
      {/* <label className="mr-1">
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
      </div> */}
    </div>
  );
};

export default PhoneNumberInput;

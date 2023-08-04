import React from "react";

type PageProps = {
  type: string;
  icon: React.ReactNode;
};

const DashboardOverview = ({ type, icon }: PageProps) => {
  return (
    <div className="flex justify-center items-center shadow-md bg-yellow-200 w-fit p-4 rounded-md mr-6">
      <div className="mr-5">
        <h2 className="text-2xl mb-2">
          <span className="font-bold text-purple-700 text-3xl">100</span>{" "}
          <span className=" font-bold "> {type}</span>
        </h2>
        <p className="mb-4">
          <span className="font-semibold">14</span> pending
        </p>
        <p className="text-purple-500 cursor-pointer">view all</p>
      </div>
      <div className="flex justify-center items-center bg-purple-500 p-2 rounded-md">
        {icon}
      </div>
    </div>
  );
};

export default DashboardOverview;

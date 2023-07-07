import React from "react";

const StockControlTable = () => {
  return (
    <div className="w-1/2">
      <h1 className="mb-2 text-center text-xl font-bold">Stock Control</h1>
      <table className=" divide-y divide-gray-200 table-fixed">
        <thead className="bg-purple-100">
          <tr>
            <th className=" p-3 w-[5rem] text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              id
            </th>
            <th className=" p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              name
            </th>
            <th className=" p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              order-date
            </th>
            <th className=" p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              due-date
            </th>
            <th className=" p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-300 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-purple-100">
            <td className="p-4 whitespace-nowrap">6af342</td>
            <td className="p-4 whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              1 slippers,4 Jerseys, 1 Versace cologne
            </td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap">01/06/2023</td>
            <td className="p-4 whitespace-nowrap ">
              <span className="bg-sky-400 p-1 rounded-md ">pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockControlTable;

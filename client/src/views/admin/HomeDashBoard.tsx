import React from "react";
import { DashboardOverview, OrdersTable } from "../../components";
import Chart from "../../components/Chart";
import {
  HiCalculator,
  HiCurrencyDollar,
  HiDocumentArrowUp,
  HiUserGroup,
} from "react-icons/hi2";
import BarGraph from "../../components/Graph";
import ProductsTable from "../../components/ProductsTable";
import StockControlTable from "../../components/StocksTable";

const HomeDashBoard = () => {
  return (
    <section>
      <div className="flex justify-center items-center mb-5">
        <DashboardOverview
          type={"Orders"}
          icon={<HiDocumentArrowUp className="text-3xl text-white" />}
        />
        <DashboardOverview
          type={"Stocks"}
          icon={<HiCalculator className="text-3xl text-white" />}
        />
        <DashboardOverview
          type={"Users"}
          icon={<HiUserGroup className="text-3xl text-white" />}
        />
        <DashboardOverview
          type={"Earnings"}
          icon={<HiCurrencyDollar className="text-3xl text-white" />}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center mb-8">
        <OrdersTable />
        <Chart />
      </div>
      <div className="w-full">
        <BarGraph />
      </div>
      <div className="flex flex-wrap justify-center items-center mb-8">
        <ProductsTable />
        <StockControlTable />
      </div>
    </section>
  );
};

export default HomeDashBoard;

import React from "react";
import { useQuery } from "@apollo/client";

import { GiftRow, PromoMsg, ShopNavigation } from "../../components";
import { GETALLCATEGORIES } from "../../services/graphql/queriesMutations";
import { PuffLoader } from "react-spinners";
import BotpressWebChat from "../../components/BotPress";

const Gifts = () => {
  const { error, loading, data } = useQuery(GETALLCATEGORIES);
  return (
    <main className="bg-gradient-to-r from-yellow-200 to-white overflow-x-hidden overflow-y-scroll h-screen w-screen">
      <PromoMsg />
      <ShopNavigation />
      {loading ? (
        <PuffLoader color="#36d7b7" />
      ) : error ? (
        <div className="flex bg-red-500 items-center justify-center">
          <p>{error.message}</p>
        </div>
      ) : (
        data && (
          <>
            {/* <GiftRow
              key={data.categories[0].id}
              category={data.categories[0].id}
            /> */}

            <GiftRow
              key={data.categories[1].id}
              category={data.categories[1]}
            />

            <GiftRow
              key={data.categories[0].id}
              category={data.categories[0]}
            />

            {/* <PromoBanner /> */}

            <GiftRow
              key={data.categories[2].id}
              category={data.categories[2]}
            />
            <div className="w-[10rem] z-[150] shadow-xl">
              <BotpressWebChat />
            </div>
          </>
        )
      )}
    </main>
  );
};

export default Gifts;

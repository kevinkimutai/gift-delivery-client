import React, { useRef } from "react";

import { FaWineBottle } from "react-icons/fa";

import { useQuery } from "@apollo/client";
import { GETGIFTSBYCATEGORY } from "../services/graphql/queriesMutations";
import { ClipLoader } from "react-spinners";

import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

type PageProps = {
  category: { id: string; name: string };
};

const GiftRow = (props: PageProps) => {
  const scrollableRef = useRef(null);

  const { loading, error, data } = useQuery(GETGIFTSBYCATEGORY, {
    variables: { id: props.category.id },
  });

  const scrollToLeft = () => {
    const divElement: any = scrollableRef.current;
    if (divElement) {
      divElement.scrollBy({
        left: -divElement.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    const divElement: any = scrollableRef.current;
    if (divElement) {
      divElement.scrollBy({
        left: divElement.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="p-4 mb-2 w-full">
      <div className="border shadow-md">
        {loading ? (
          <ClipLoader color="#c084fc" />
        ) : error ? (
          <div>something went wrong!!!</div>
        ) : (
          <>
            <div className="bg-purple-600 p-2 text-white flex justify-between items-center">
              <h2 className="flex items-center text-lg">
                <span>
                  {/*TODO: ADD ANIMATION TO ICON */}
                  <FaWineBottle className="mr-3" />
                </span>
                {props.category.name}
              </h2>
            </div>
            <div className="relative ">
              <div
                className="hidden sm:block bg-purple-600 p-4 absolute left-0 z-10 top-20 cursor-pointer"
                onClick={scrollToLeft}
              >
                <button className="text-white text-xl">
                  <HiArrowSmallLeft />
                </button>
              </div>
              <div
                ref={scrollableRef}
                className="flex flex-row bg-white p-4 pb-7 w-full overflow-x-scroll scrollbar-hide "
              >
                {/*TODO:ADD SCROLLABLE BTNS*/}
                {data?.giftsByCategory.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start flex-col border-2 shadow p-2 min-w-[10rem] m-3 hover:scale-110 hover:shadow-sm cursor-pointer transition duration-700 ease-in-out"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain mb-4 "
                    />
                    <div>
                      <h2 className="font-semibold mb-2 flex-1">{item.name}</h2>
                      <p className="font-bold w-full ml-auto flex-1">
                        <span className="text-purple-600 mr-1">Kshs</span>
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="hidden sm:block bg-purple-600 p-4 absolute right-0 z-10 top-20 cursor-pointer"
                onClick={scrollToRight}
              >
                <button className="text-white text-xl">
                  <HiArrowSmallRight />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <div className="flex justify-center -mt-4">
        <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:scale-105 hover:duration-300 transition ease-in-out">
          View More
        </button>
      </div> */}
    </section>
  );
};

export default GiftRow;

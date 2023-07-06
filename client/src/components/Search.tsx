import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import useDebounce from "../hooks/useDebounce";
import { SEARCHGIFT } from "../services/graphql/queriesMutations";
import { useLazyQuery } from "@apollo/client";

const Search = () => {
  const [query, setQuery] = useState("");
  //const [searchData, setSearchData] = useState([]);
  const [searchGift, { loading, error, data: searchData }] =
    useLazyQuery(SEARCHGIFT);

  const debouncedRequest = useDebounce(() => {
    searchGift({ variables: { search: query } });
    console.log(query);
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);

    debouncedRequest();
  };

  return (
    <Combobox>
      {/* //value={selectedPerson} onChange={setSelectedPerson}> */}
      <div className="relative w-100">
        <Combobox.Input
          onChange={onChange}
          value={query}
          placeholder="search for your favourite gift..."
          className="border border-purple-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-sky-500 w-[12rem] xxsm:w-[15rem] xs:w-[20rem] md:w-[25rem] lg:w-[30rem] p-2"
        />
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Combobox.Options
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[150]"
            static
          >
            {loading ? (
              <p>loading</p>
            ) : searchData ? (
              searchData.searchGift?.map((search: any) => (
                <Combobox.Option key={search.id} value={search} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? "bg-purple-500 text-white p-2"
                          : "bg-white text-black p-2"
                      }`}
                      //onClick={}
                    >
                      {search.name}
                    </li>
                  )}
                </Combobox.Option>

                // <Combobox.Option
                //   key={searchData.searchGift?.id}
                //   //   className={({ active }) =>
                //   //     `relative p-2 ${
                //   //       active ? "bg-purple-500 text-white" : "text-gray-900"
                //   //     }`
                //   //   }
                //   value={searchData.searchGift}
                // >
                //   {({ active, selected }) => (
                //     <li
                //       className={`${
                //         active
                //           ? "bg-blue-500 text-white"
                //           : "bg-white text-black"
                //       }`}
                //     >
                //       {searchData.searchGift.name}
                //     </li>
                //   )}
                // </Combobox.Option>
              ))
            ) : error ? (
              <p> something went wrong</p>
            ) : (
              <p>Sorry Stock Not Present!</p>
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Search;

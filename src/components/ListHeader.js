import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

function ListHeader() {
  return (
    <div className="flex items-center justify-between text-xs lg:text-base">
      <div className="flex items-center">
        <button className="bg-blue-800 hidden sm:block text-white h-10 font-semibold py-1 px-4 rounded-md ">
          Add New Product
        </button>
        <button className="bg-white hover:shadow-lg h-10  font-semibold py-1 px-4 rounded-md ml-2">
          <AiOutlinePlus className="text-gray-500" />
        </button>
      </div>
      <p className="text-gray-500 hidden md:block">
        Showing 1 of 10 of 150 entries
      </p>
      <div className="relative text-gray-400">
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </span>
        <input
          className="py-2 text-sm text-white shadow-md rounded-md px-3 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default ListHeader;

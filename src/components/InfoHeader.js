import React from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

function InfoHeader() {
  return (
    <div className="text-black flex justify-end sm:justify-between items-center border-b-2 mx-5 h-16 ">
      <div className="hidden sm:block">
        Application {">"}{" "}
        <span className="text-blue-800 cursor-pointer">Dashboard</span>
      </div>
      <div className="flex justify-between items-center ">
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
            className="py-2 text-sm text-white shadow-md rounded-2xl px-3 focus:outline-none bg-gray-200 focus:text-gray-900"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <div className="flex justify-center">
          <span className="relative inline-block mx-5">
            <AiOutlineBell className="text-2xl" />
            <span className="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
          </span>
        </div>

        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default InfoHeader;

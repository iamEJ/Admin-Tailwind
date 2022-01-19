import React from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

function ListFooter() {
  return (
    <div className="text-gray-800 flex justify-between items-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100 ">
              <AiOutlineDoubleLeft />
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
              <AiOutlineLeft />
            </button>
          </li>
          <li>
            <button className="h-6 hidden sm:block md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
              ...
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
              1
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 rounded text-gray-800 bg-white transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
              2
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100 ">
              3
            </button>
          </li>
          <li>
            <button className="h-6 hidden sm:block md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
              ...
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100 ">
              <AiOutlineRight />
            </button>
          </li>
          <li>
            <button className="h-6 md:h-10 px-2 md:px-5 text-gray-800 transition-colors duration-150  rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
              <AiOutlineDoubleRight />
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <select name="list" className="rounded pr-3">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
}

export default ListFooter;

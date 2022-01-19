import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function ListItem({ images, productName, category, stock, status }) {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-6 bg-white p-3 my-4 rounded-md ">
        <div className=" -space-x-4 overflow-hidden hidden md:flex">
          {images.map((item, index) => {
            return (
              <img
                key={index}
                className=" h-10 w-10 rounded-full ring-2 ring-white"
                src={images[index]}
                alt=""
              />
            );
          })}
        </div>
        <div className="col-span-2">
          <h2 className="text-gray-900 font-semibold">{productName}</h2>
          <p className="text-gray-500">{category}</p>
        </div>
        <div className="text-gray-900 flex items-center justify-center ">
          {stock}
        </div>
        <div
          className={`flex items-center justify-center ${
            status === "Active" ? "text-green-500" : "text-red-600"
          }`}
        >
          <BsCheck2Square className="mr-2" />{" "}
          <span className="hidden md:block">{status}</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-gray-900 flex items-center justify-center px-1 cursor-pointer">
            <FiEdit className="mr-2" />{" "}
            <span className="hidden lg:block">Edit</span>
          </div>
          <div className="text-red-600 flex items-center justify-center px-1 cursor-pointer">
            <RiDeleteBin6Line className="mr-2" />{" "}
            <span className="hidden lg:block">Delete</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;

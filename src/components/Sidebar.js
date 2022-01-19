import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiPulseFill } from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="mt-3 ml-5 text-white md:w-1/6">
      <div className=" border-b-2 mx-4 h-16 flex items-center ">
        <ImStack className="mr-2 text-2xl" />
        <h1 className="text-xl">Admin</h1>
      </div>
      <div className="mt-4 ">
        <div className="div cursor-pointer p-4 flex items-center  text-gray-900 ">
          <FiHome className="mr-2" />
          CRUD example
        </div>
        <div
          className="cursor-pointer p-4 flex items-center justify-between "
          onClick={() => openSidebar()}
        >
          <div className="flex items-center ">
            <BsBox className="mr-2" />
            Menu Item{" "}
          </div>

          <MdOutlineKeyboardArrowUp
            className={`mx-2 ${sidebar ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={
            sidebar ? "hidden " : "block bg-blue-900 p-2 rounded-sm mr-3 "
          }
        >
          <div className="flex items-center  py-2 cursor-pointer hover:bg-blue-800 rounded">
            <RiPulseFill className="mx-2" /> Sub menu item 1
          </div>
          <div className="flex items-center  py-2 cursor-pointer hover:bg-blue-800 rounded">
            <RiPulseFill className="mx-2" /> Sub menu item 2
          </div>
          <div className="flex items-center  py-2 cursor-pointer hover:bg-blue-800 rounded">
            <RiPulseFill className="mx-2" /> Sub menu item 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

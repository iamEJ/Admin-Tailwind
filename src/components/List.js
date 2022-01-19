import React from "react";
import { data } from "../data";
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="p-5 ">
      <h1 className="text-gray-800 font-semibold py-5">Data List Layout</h1>
      <ListHeader />
      <div className="grid grid-cols-5 md:grid-cols-6 text-gray-800 p-3 my-4 rounded-md text-xs md:text-base uppercase font-semibold">
        <h1 className="hidden md:block">Images</h1>
        <h1 className="col-span-2">Product Name</h1>
        <h1 className="flex items-center justify-center">Stock</h1>
        <h1 className="flex items-center justify-center">Status</h1>
        <h1 className="flex items-center justify-center">Actions</h1>
      </div>
      {data.map((item) => {
        return <ListItem key={item.id} {...item} />;
      })}
      <ListFooter />
    </div>
  );
}

export default List;

import React from "react";
import InfoHeader from "./InfoHeader";
import List from "./List";

function Info() {
  return (
    <div className="m-5 md:ml-0 md:mr-5 rounded-3xl mt-3 mb-3 bg-blue-50  text-white md:w-5/6 ">
      <InfoHeader />
      <List />
    </div>
  );
}

export default Info;

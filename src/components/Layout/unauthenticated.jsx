import React from "react";
import { Outlet } from "react-router-dom";

export default function UnauthenticatedLayout() {
  return (
    <div className="h-full w-full px-7 flex justify-between">
      <div className="w-[50%] h-full ">
        <img
          src={
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[50%]">
        <Outlet />
      </div>
    </div>
  );
}

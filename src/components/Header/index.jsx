import React from "react";

const Header = () => {
  return (
    <div>
      <div className="h-[10vh] w-[90vw] flex justify-between items-center">
        <h1 className="text-[30px] font-[600] uppercase p-[30px] text-green-700 animate-pulse">
          logo
        </h1>
        <ul className="flex gap-[30px] uppercase">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>services</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

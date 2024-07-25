import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDownButton = ({ name }) => {
  return (
    <div className="md:bg-[#1B3252] bg-[#EFEFEF] md:w-[150px] h-[45px] w-full rounded-lg flex gap-2  p-2 md:justify-center justify-between items-center cursor-pointer">
      <h1 className="md:text-white  text-[#616975]">{name} </h1>
      <IoMdArrowDropdown className="md:text-white text-black text-[20px] " />
    </div>
  );
};

export default DropDownButton;

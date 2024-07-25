import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text "
      className="md:w-[400px] w-full  h-[45px] md:bg-[#1B3252] bg-white  border border-[#DADDE2] text-white font-[600] rounded-lg px-3 py-4"
      placeholder="Search retreats by title "
    />
  );
};

export default SearchBar;

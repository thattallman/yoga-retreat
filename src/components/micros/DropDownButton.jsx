import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";

const DropDownButton = ({
  name,
  typesOfEvents,
  typeSelected,
  setSelectedType,
  setCurrentPage
}) => {
  const [open, setOpen] = useState(false);
  console.log(typesOfEvents);
  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="md:bg-[#1B3252] relative   bg-[#EFEFEF] md:w-[150px] h-[45px] w-full rounded-lg flex gap-2  p-2 md:justify-center justify-between items-center cursor-pointer"
      >
        <h1 className="md:text-white  text-[#616975]">
          {typeSelected && name === 'Filter by Type' ? typeSelected : name}
        </h1>
        {open ? (
          <MdArrowDropUp className="md:text-white text-black text-[20px] " />
        ) : (
          <IoMdArrowDropdown className="md:text-white text-black text-[20px] " />
        )}
      </div>
      {open && name === 'Filter by Type' && (
        <div className="absolute top-[55px] md:w-[150px] w-full z-40 bg-white rounded-lg">
          {typesOfEvents.map((data, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedType(data);
                setOpen(!open);
                setCurrentPage(1)
              }}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;





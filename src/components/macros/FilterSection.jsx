import React from "react";
import DropDownButton from "../micros/DropDownButton";
import SearchBar from "../micros/SearchBar";
import EventCard from "../micros/EventCard";
import { retreatData } from "../../Data/RetreatData";

const FilterSection = () => {
  return (
    <>
      <div className="flex flex-col gap-[40px] md:mt-0 mt-[30px] ">
        <div className="flex md:flex-row flex-col justify-between px-4 gap-5 md:gap-0">
          <div className="flex md:flex-row flex-col  gap-5 md:gap-3">
            <DropDownButton name={"Filter by Date"} />
            <DropDownButton name={"Filter by Type"} />
          </div>
          <div>
            <SearchBar />
          </div>
        </div>

        <div className="px-3">
          <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
            {retreatData.map((data, index) => {
              return (
                <div key={index}>
                  <EventCard
                    image={data?.image}
                    title={data?.title}
                    description={data?.description}
                    date={data?.date}
                    duration={data?.duration}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

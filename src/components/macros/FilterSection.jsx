import { useState, useEffect } from "react";
import DropDownButton from "../micros/DropDownButton";
import SearchBar from "../micros/SearchBar";
import EventCard from "../micros/EventCard";
import { InfinitySpin } from "react-loader-spinner";

const FilterSection = () => {
  const [typeSelected, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [retreatDataArray, setRetreatDataArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noDataFetched, setNoDataFetched] = useState(false);
  
  const [error, setError] = useState(null); 
  const itemsPerPage = 3;
  const typesOfEvents = [
    "Yoga",
    "Meditation",
    "Detox",
    "Signature",
    "Standalone",
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${itemsPerPage}&search=${searchQuery}&filter=${typeSelected}`
        );

        if (response.ok) {
          const data = await response.json();
          setRetreatDataArray(data);

          if (data.length === 0) setNoDataFetched(true);
          else setNoDataFetched(false);
        } else if (response.status === 404) {
          setNoDataFetched(true);
          setRetreatDataArray([]); 
        } else {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        setError(err.message); 
        setRetreatDataArray([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, typeSelected, searchQuery]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] md:mt-0 mt-[30px]">
        <div className="flex md:flex-row flex-col justify-between px-4 gap-5 md:gap-0">
          <div className="flex md:flex-row flex-col gap-5 md:gap-3">
            <DropDownButton
              name={"Filter by Type"}
              typesOfEvents={typesOfEvents}
              setSelectedType={setSelectedType}
              typeSelected={typeSelected}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div>
            <SearchBar setSearchQuery={setSearchQuery}  setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className="px-3">
          {loading ? (
            <div className="flex justify-center items-center">
              <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
              />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center text-red-500 text-[34px]">
              {error}
            </div>
          ) : noDataFetched ? (
            <div className="flex justify-center items-center text-[34px]">
              No more retreats
            </div>
          ) : (
            <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
              {retreatDataArray.map((data, index) => {
                return (
                  <div key={index}>
                    <EventCard
                      image={data?.image}
                      title={data?.title}
                      description={data?.description}
                      date={data?.date}
                      duration={data?.duration}
                      location={data?.location}
                      price={data?.price}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 px-3 mb-[20px]">
          <button
            onClick={prevPage}
            className={`bg-[#1B3252] relative text-white w-[150px] h-[45px] rounded-[30px] md:rounded-lg flex gap-2 p-2 justify-center items-center cursor-pointer ${
              currentPage === 1 ? "hidden" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className={`bg-[#1B3252] relative text-white w-[150px] h-[45px] rounded-[30px] md:rounded-lg flex gap-2 p-2 justify-center items-center cursor-pointer ${
              retreatDataArray.length < itemsPerPage ? "hidden" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

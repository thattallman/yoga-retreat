

const SearchBar = ({ setSearchQuery, setCurrentPage }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1)
  };

  return (
    <input
      type="text"
      className="md:w-[400px] w-full h-[45px] md:bg-[#1B3252] bg-white border border-[#DADDE2] md:text-white text-black font-[600] rounded-lg px-3 py-4"
      placeholder="Search retreats by title"
      onChange={handleChange}
    />
  );
};

export default SearchBar;

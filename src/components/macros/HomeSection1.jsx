import yogaImage from "../../assets/DashboardImage.jpg";

const HomeSection1 = () => {
  return (
    <div className="p-4 md:flex flex-col  hidden">
      <div className="bg-[#E0D9CF] p-5 rounded-[10px] flex flex-col gap-[20px]  ">
        <img
          className="rounded-[10px]  h-[300px] w-full object-cover "
          src={yogaImage}
          alt="yoga image"
        />
        <div>
          <h1 className="text-[20px] font-[600] text-[#1A1917]">
            Discover Your Inner Peace
          </h1>
          <h1 className="text-[15px] font-[600] text-[#1A1917]">
            Join us for a series of wellness retreats designed to help you find
            transquality and rejuvenation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;

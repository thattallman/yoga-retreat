import Navbar from "../../components/macros/Navbar";
import HomeSection1 from "../../components/macros/HomeSection1";
import FilterSection from "../../components/macros/FilterSection";
import Footer from "../../components/macros/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeSection1 />
      <FilterSection />
      <Footer />
    </>
  );
};

export default HomePage;

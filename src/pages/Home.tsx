import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SearchBox from "../components/search/SearchBox";
import PopularRoutes from "../components/routes/PopularRoutes";
import WhyChooseUs from "../components/common/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <PopularRoutes />
      <WhyChooseUs />
    </>
  );
};

export default Home;
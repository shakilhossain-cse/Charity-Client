import React from "react";
import Banner from "../../components/Banner/Banner";
import Causes from "../../components/Causes/Causes";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../Contact/Contact";
import OurMission from "../Mission/Mission";
import Volunteers from "../Volunteers/Volunteers";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <OurMission />
      <Volunteers />
      <Causes />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;

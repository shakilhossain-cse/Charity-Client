import React from "react";
import Banner from "../../components/Banner/Banner";
import Causes from "../../components/Causes/Causes";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../Contact/Contact";
import OurMission from "../../components/Mission/Mission";
import Volunteers from "../../components/Volunteers/Volunteers";
import Fund from "../../components/Fund/Fund";
import JoinUs from "../../components/JoinUs/JoinUs";
import Sponsor from "../../components/Sponsor/Sponsor";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <OurMission />
      <Volunteers />
      <Causes />
      <Fund />
      <JoinUs />
      <Sponsor />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;

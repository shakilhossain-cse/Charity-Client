import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;

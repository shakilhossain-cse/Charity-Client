import React from "react";
import Banner from "../../components/Banner/Banner";
import Causes from "../../components/Causes/Causes";
import Contact from "../Contact/Contact";
import OurMission from "../../components/Mission/Mission";
import Volunteers from "../../components/Volunteers/Volunteers";
import Fund from "../../components/Fund/Fund";
import FeaturePost from "../../components/FeaturePost/FeaturePost";
import JoinUs from "../../components/JoinUs/JoinUs";
import Sponsor from "../../components/Sponsor/Sponsor";
import Layout from "../../components/Layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
  
      <Banner />
      <FeaturePost/>
      <OurMission />
      <Causes />
      <Volunteers />
      <Fund />
      <JoinUs />
      <Sponsor />
      {/* <Contact /> */}
    
    </Layout>
  );
};

export default Home;

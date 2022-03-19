import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

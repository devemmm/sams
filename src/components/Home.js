import React from "react";
import Header from "./sub-components/Header";
import Asidebar from "./sub-components/Asidebar";
import Main from "./sub-components/Main";
import Footer from "./sub-components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Asidebar />

      <Main />
      <Footer />
    </>
  );
};

export default Home;

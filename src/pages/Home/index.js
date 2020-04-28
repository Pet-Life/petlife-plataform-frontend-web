import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionCep from "../../components/SectionCep";
import SectionCategory from "../../components/SectionCategory";
import SectionWork from "../../components/SectionWork";

const Home = () => {
  return (
    <>
      <Header />
      <div id="modal-portal" />
      <SectionCep />
      <SectionCategory />
      <SectionWork />
      <Footer />
    </>
  );
};

export default Home;

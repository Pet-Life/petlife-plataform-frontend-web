import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionCep from '../../components/SectionCep';
import SectionCategory from '../../components/SectionCategory';

const Home = () => {
  return (
    <>
      <Header />
      <SectionCep />
      <SectionCategory />
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';

import GlobalStyle from './styles/globalStyle';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;

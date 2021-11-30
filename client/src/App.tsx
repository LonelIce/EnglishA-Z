import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = function () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

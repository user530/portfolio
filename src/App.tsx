import React from 'react';
import { PortfolioPage } from './pages/portfolio/Portfolio';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <PortfolioPage />
      <Footer />
    </>
  );
}

export default App;

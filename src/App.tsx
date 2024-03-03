import React from 'react';
import { PortfolioPage } from './pages/portfolio/Portfolio';
import { Navbar } from './components/navigation/Nav_bar';

function App() {
  return (
    <>
      <Navbar />
      <PortfolioPage />
    </>
  );
}

export default App;

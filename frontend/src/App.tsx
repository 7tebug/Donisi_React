import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import StepsSection from './components/sections/StepsSection';
import StatsSection from './components/sections/StatsSection';
import WorksSection from './components/sections/WorksSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StepsSection />
        <StatsSection />
        <WorksSection />
      </main>
    </>
  );
};

export default App;

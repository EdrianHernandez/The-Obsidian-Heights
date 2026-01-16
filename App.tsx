import React from 'react';
import Navbar from './components/Navbar';
import HeroGallery from './components/HeroGallery';
import RoomSuiteGrid from './components/RoomSuiteGrid';
import AmenitiesIcons from './components/AmenitiesIcons';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroGallery />
        <RoomSuiteGrid />
        <AmenitiesIcons />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default App;
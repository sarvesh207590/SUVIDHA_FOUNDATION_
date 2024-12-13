import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';
import CustomCarousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import WhatWeDoPage from '../components/WhatWeDoPage';
import StatsPage from '../components/StatsPage';
import EventsPage from '../components/EventsPage';
import GalleryPage from '../components/GalleryPage'; // Import the GalleryPage
import Donors from '../components/Donors';
import ContactPage from '../components/ContactPage';
import OurTeam from '../components/OurTeam';

const Home = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <CustomCarousel />
              <AboutSection />
              <WhatWeDoPage />
              <StatsPage />
              <EventsPage />
            </>
          }
        />

        {/* Gallery Page Route */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/OurTeam" element={< OurTeam/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Home;

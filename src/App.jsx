import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import EventDetails from './components/EventDetails';
import HowToJoin from './components/HowToJoin';
import Anatomy from './components/Anatomy';
import SpacesAndAMAs from './components/SpacesAndAMAs';
import CommunityArts from './components/CommunityArts';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <EventDetails />
      <HowToJoin />
      <Anatomy />
      <SpacesAndAMAs />
      <CommunityArts />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

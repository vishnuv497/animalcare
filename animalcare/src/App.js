import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Service from './components/Service';
import Slideshow from './components/Slideshow';
import Testimonial from './components/Testimonial';
import AnimalCareForm from './components/AnimalCareForm';
import Footer from './components/Footer';
import AdoptedAnimals from './components/AdoptedAnimals';
import './App.css'; // Optional: Custom CSS for App

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Slideshow />
      <Team/>
      <Service />
      <AdoptedAnimals/>
      <Testimonial/>
      <AnimalCareForm />
      <Footer />
    </div>
  );
}

export default App;

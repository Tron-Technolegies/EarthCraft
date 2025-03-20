import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Faq from "./Components/FAQ/Faq";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "../src/fonts.css";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      
      <Testimonials />
      {/* <Faq /> */}
      <section id="contact"><Contact /></section>
      <WhatsApp />
      <Footer />
    </>
  );
};

export default App;

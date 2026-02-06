import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhyChooseMe from "./components/WhyChooseMe";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App bg-[#0a0a0f]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Skills />
      <WhyChooseMe />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

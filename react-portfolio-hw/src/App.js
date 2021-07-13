import React from "react";
import Header from "./components/header/Header";
import AboutMe from "./components/about-me/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import './app.scss';

function App() {
  return (

    <div className="app">
      <Header />
      <div className="sections">
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

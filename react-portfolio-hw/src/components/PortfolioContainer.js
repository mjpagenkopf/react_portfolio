import React, { useState } from "react";
import Header from "./header/Header";
import AboutMe from "./about-me/AboutMe";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Resume from "./resume/Resume";


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Blog') {
          return <Resume />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div className="app">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;



// return (

//     <div className="app">
//       <Header />
//       <div className="sections">
//         <AboutMe />
//         <Portfolio />
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
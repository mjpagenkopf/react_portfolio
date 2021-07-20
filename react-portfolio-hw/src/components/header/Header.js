import './header.scss';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <nav className="header navbar navbar-expand-lg navbar-light">
            <div className="wrapper">
                 <ul className="left nav flex-column">
                    <li className="logo">Mike Pagenkopf
                    </li>
                    <li className="logo2">Web Developer
                    </li>
                 </ul>
                
                 <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a href="#about-me" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}>About Me</a>
                    </li> 
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
                    </li>
                 </ul>
                
            </div>
        </nav>
    )
}

//Header() is the function call aka execution
//Header is a reference where everything inside the curly braces is superimposed 

// {/* <div className="header">
//             <div className="wrapper">
//                 <div className="left">
//                     {/* <a href="#about-me" className="logo">Home</a> */}
//                 </div>
                
//                 <nav className="right">
//                     <ul className="header-block">
//                         <li>
//                             <a href="#about-me" className="logo">About Me</a>
//                         </li> 
//                         <li>
//                             <a href="#about-me" className="logo">About Me</a>
//                         </li>
//                         <li>
//                             <a href="#portfolio" className="logo">Portfolio</a>
//                         </li>
//                         <li>
//                             <a href="#contact" className="logo">Contact</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div> */}

/* {/* <span className="line1"></span>
<span className="line2"></span>
<span className="line3"></span> */
// {/* <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> */}
/* function Header({ menuOpen, setMenuOpen }) */
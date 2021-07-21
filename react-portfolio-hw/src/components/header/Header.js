import './header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


export default function Header({ currentPage, handlePageChange }) {
    return (
    <Navbar className="header" bg="light" expand="lg">
        <Container>
            <Nav>
            <Navbar.Brand href="#about-me" size="lg"><h2>Mike Pagenkopf</h2>
                <h6 className="logo2">Web Developer</h6>
            </Navbar.Brand>
            </Nav>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul className="nav right">
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
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
                
            
    )
}

//Header() is the function call aka execution
//Header is a reference where everything inside the curly braces is superimposed 

{/* <nav className="header navbar navbar-expand-lg navbar-light">
        //     <div className="wrapper">
        //          <ul className="left nav flex-column">
        //             <li className="logo">Mike Pagenkopf
        //             </li>
        //             <li className="logo2">Web Developer
        //             </li>
        //          </ul>
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
        </nav> */}
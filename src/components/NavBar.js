import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/nav-icon1.svg";
// import navIcon2 from "../assets/nav-icon3.svg";
import navIcon3 from "../assets/github.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="#home">
            <h1 className={scrolled ? "scrolledlogoName" : "logoName"}>D.G</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={scrolled ? "scrolledlogoName" : "logoName"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={scrolled ? "scrolledlogoName" : "logoName"}
                onClick={() => onUpdateActiveLink("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={scrolled ? "scrolledlogoName" : "logoName"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={scrolled ? "scrolledlogoName" : "logoName"}
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/divitgaur/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                {/* <a
                  href="https://www.instagram.com/divitgaur02/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a> */}
                <a
                  href="https://github.com/gaurdivit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1_7UUIVPJxJIpSFxzTBjMIiWXJJkonZck/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className={scrolled ? "scrolledvvd" : "vvd"}>
                  <span>Resume</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

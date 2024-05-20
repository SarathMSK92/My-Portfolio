import React, { useState } from "react";
import { Link } from "react-scroll";
import { CV_URL } from "../../Data/Data";
import "./Navbar.scss";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  const handleDownloadResume = () => {
    const pdfPath =
      process.env.PUBLIC_URL + "/File/Professional Resume - Sarathkumar.pdf";

    // Creating a temporary anchor element
    const link = document.createElement("a");

    // Setting the href attribute to the PDF file path
    link.href = pdfPath;

    // Setting the download attribute to force download
    link.download = "Sarathkumar-CV.pdf";

    // Simulating a click on the anchor element
    link.click();
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h2>
          <Link
            className="navbar-title"
            to="main"
            smooth={true}
            offset={-100}
            duration={500}
          >
            M.S.K
          </Link>
        </h2>
        <ul className="navbar-menu">
          <Link to="main" smooth={true} offset={-100} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About
          </Link>
          <Link to="projects" smooth={true} offset={-50} duration={500}>
            Experience
          </Link>
          <Link to="skills" smooth={true} offset={-50} duration={500}>
            Skills
          </Link>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
        </ul>
        <button className="hire-me-btn" onClick={() => handleDownloadResume()}>
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Navbar;

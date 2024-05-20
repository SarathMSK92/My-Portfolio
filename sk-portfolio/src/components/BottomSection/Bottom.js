import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Bottom.scss";

function Bottom() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  return (
    <div className="cols" id="contact">
      {/* Section 1  */}
      <div className="about-col">
        <h3>M.S.K (mailtk.sarath@gmail.com)</h3>
        <p>Creative FrontEnd Developer</p>
      </div>

      {/* Section 2 */}
      <div className="links-col">
        <h4>Useful Links</h4>
        <Link
          to="main"
          smooth={true}
          offset={-100}
          duration={500}
          onClick={handleMenuClick}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-50}
          duration={500}
          onClick={closeMenu}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-50}
          duration={500}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-50}
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>

      {/* Section 3 */}
      <div className="links-col">
        <h4>Social Media</h4>
        <Link href="#">Linkedin</Link>
        <Link href="#">Github</Link>
      </div>
    </div>
  );
}

export default Bottom;

import React from "react";
import "./WhoIAm.scss";
import laptopImage from "../../Assets/laptop2.png";

function WhoIAm() {
  return (
    <div className="who-i-am" id="about">
      <h5 className="seprator">Who I Am</h5>

      <div className="about">
        <img
          src={laptopImage}
          alt="laptop-icon"
          className="laptop-image-icon"
        />
        <div className="info">
          <h3>About Me</h3>
          <p>
            Welcome to my portfolio! I'm a passionate associate front end
            developer specializing in React, dedicated to creating captivating
            user experiences and pixel-perfect designs. With a strong foundation
            in HTML, CSS, and JavaScript, I bring creativity and technical
            expertise to every project I undertake.
            <br />
            <br />
            Throughout my career, I've collaborated closely with
            cross-functional teams to deliver high-quality web applications that
            exceed client expectations. My proficiency in React allows me to
            architect scalable solutions, implement efficient state management,
            and optimize performance for seamless user interaction.
            <br />
            <br />
            I'm deeply committed to continuous learning and staying ahead of
            industry trends. Whether it's mastering new React libraries,
            refining my UI/UX design skills, or exploring emerging frontend
            technologies, I'm always eager to expand my knowledge and skill set.
            <br /> <br />
            I'm currently seeking opportunities to contribute to innovative
            projects that leverage React to push the boundaries of web
            development. Let's connect and explore how I can bring value to your
            team or project.
          </p>
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
}

export default WhoIAm;

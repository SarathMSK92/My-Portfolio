import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h5 className="seprator">My Skills</h5>
      <div className="skills-container">
        <div className="skill-left-side">
          <div className="info">
            <h3>What My Programming Skills Included?</h3>
            <ul className="skills-list">
              <li>
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effortand time with those
                technologies.
              </li>
              <li>
                Proficient in HTML, CSS, and JavaScript for building dynamic and
                responsive user interfaces.
              </li>
              <li>
                Experienced in frontend frameworks such as React for efficient
                development.
              </li>
              <li>
                Skilled in implementing modern design principles and ensuring
                cross-browser compatibility.
              </li>
              <li>
                Familiar with version control systems like Git for collaborative
                development workflows
              </li>
              <li>
                Continuously learning and adapting to emerging technologies and
                best practices in frontend development.
              </li>
            </ul>
          </div>
          <button>Hire Me</button>
        </div>

        <div className="skill-right-side">
          <div className="info">
            <div className="item">
              <i class="bx bxl-html5"></i>
            </div>
            <div className="item">
              <i class="bx bxl-css3"></i>
            </div>
            <div className="item">
              <i class="bx bxl-javascript"></i>
            </div>
            <div className="item">
              <i class="bx bxl-react"></i>
            </div>
            <div className="item">
              <i class="bx bxl-git"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import { LINKEDIN_URL } from "../../Data/Data";
import { GITHUB_URL } from "../../Data/Data";
import "./Main.scss";
import MyLogo from "../../Assets/logo1.png";

function Main() {
  const openLinkedInPage = () => {
    window.open(LINKEDIN_URL, "_blank", "noreferrer");
  };

  const openGithubPage = () => {
    window.open(GITHUB_URL, "_blank", "noreferrer");
  };
  return (
    <div className="main" id="main">
      <div className="main-left-side">
        <h3>
          Hi, I am <span>M.Sarathkumar</span>&#128075;
        </h3>
        <p className="main-title">Creative FrontEnd Web Developer</p>
        <p className="subtitle">
          I Design And Code Beautiful Simple Things And I Love What I Doing!
        </p>
        <div className="main-social-icon">
          <i
            class="bx bxl-linkedin-square"
            onClick={() => openLinkedInPage()}
          ></i>
          <i class="bx bxl-github" onClick={() => openGithubPage()}></i>
        </div>

        <ul className="personal-info">
          <li>mailtk.sarath@gmail.com</li>
          <li>9094784547</li>
        </ul>
      </div>

      <div className="main-right-side">
        <img src={MyLogo} alt="my-logo-icon" className="my-logo-icon" />
      </div>
    </div>
  );
}

export default Main;

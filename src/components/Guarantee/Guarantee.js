import React from "react";
import "./Guarantee.scss";

function Guarantee() {
  return (
    <div className="guarantee-container" id="projects">
      <div className="project-title">Projects and experience</div>
      <div className="guarantee">
        {/* Experience details */}
        <div className="item">
          <div className="icon">
            <i class="bx bx-check-shield"></i>
          </div>
          <div className="info">
            <h3>+1</h3>
            <p>Year Of Experience</p>
          </div>
          <i class="bx bx-chevron-right"></i>
        </div>

        {/* Project details */}
        <div className="item">
          <div className="icon">
            <i class="bx bx-check-circle"></i>
          </div>
          <div className="info">
            <h3>4</h3>
            <p>Completed Projects</p>
          </div>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;

import React from 'react';
import './TechnologyPartner.css';

function TechnologyPartner() {
  return (
    <section className="technology-partner-section">
      <div className="overlay">
        <div className="container content">
          <h2 className="tp-heading">The Ultimate Technology Partner for Your Business</h2>
          {/* <p className="tp-description">
            Discover how our innovative AV and IT solutions empower businesses to achieve excellence, streamline operations, and enhance customer experiences.
          </p> */}
          <div className="tp-flex-button">
          <a href="/contactus" className="button tp-button">
            Patner With Us
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyPartner;

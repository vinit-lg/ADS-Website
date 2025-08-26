import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        {/* <div className="about-flex-container">
        <h2 className="about-heading">
          Elevating Your Business to New
        </h2>
        <span>Heights with AV & IT Solutions</span>
        </div> */}
        <div className="about-section-content">
            <div className="about-section-description">
                 <div className="about-flex-container">
        <h2 className="about-heading">
          Elevating Your Business to New
        </h2>
        <span>Heights with AV & IT Solutions</span>
        </div>
        <p className="about-description">
          We have a proven track record of delivering innovative and
          cost-effective solutions that deliver high performance, reliability,
          and ease of operation. Our expertise extends to industries such as
          education, healthcare, hospitality, financial services, retail, theme
          parks, government, and beyond. Transforming Spaces, Enhancing
          Experiences: From Meeting Rooms to Home Entertainment and Beyond.
          Discover the Full Spectrum of our Comprehensive Solutions.
        </p>

        <a href="/solutions" className="button">
          Deive into our innovative offerings
        </a>
      </div>
      <div className="about-section-image">
        <img src="/images/landing+page+img.webp" alt="" srcset="" />
      </div>
      </div>
      </div>
    </section>
  );
}

export default AboutSection;

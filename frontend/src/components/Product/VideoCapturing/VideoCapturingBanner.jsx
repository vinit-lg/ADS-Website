import React from "react";
import "./VideoCapturingBanner.css";

export default function VideoCapturingBanner({
  title = "Video Capturing",
  buttonLabel = "Request a Call Back",
  onButtonClick = () => {},
  image = "/images/video-capturing-hero.jpg",
  height = "72vh",
  overlay = true,
  align = "left",
}) {
  return (
    <section
      className={`vcb-banner ${align === "center" ? "vcb-center" : "vcb-left"} ${
        overlay ? "vcb-has-overlay" : ""
      }`}
      style={{ ["--vcb-bg"]: `url(${image})`, ["--vcb-h"]: height }}
      aria-label={title}
    >
      <div className="vcb-inner">
        <h1 className="vcb-title">{title}</h1>

        <button className="vcb-cta" type="button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}

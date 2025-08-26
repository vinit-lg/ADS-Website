import React from "react";
import WeareBanner from "../../components/AboutUs/WeareBanner";
import WeareVideo from "../../components/AboutUs/WeareVideo";
import TrackRecord from "../../components/AboutUs/TrackRecord";

// Example video URLs (replace with your actual video paths)
const video1 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video2 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video3 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video4 = "https://www.w3schools.com/html/mov_bbb.mp4";
const video5 = "https://www.w3schools.com/html/mov_bbb.mp4";


const WhoWeAre = () => {
  return (
    <>
      <WeareBanner />

      <WeareVideo
        title="1996: A startup. Today:"
        subtitle="A global enterprise"
        description="We pride ourselves on delivering high-quality solutions and providing excellent service and support to our clients."
        videoSrc={video1}
      />

      <TrackRecord />

      <WeareVideo
        title="Bringing Your Vision to Life"
        description="Our team is always striving to stay up-to-date on the latest industry trends and technologies, so we can provide our clients with the best solutions for their needs."
        videoSrc={video2}
      />

      <WeareVideo
        title="Distribution"
        description="We distribute high-end Audio-Visual & IT systems, bringing the latest cutting-edge technology to the region, in partnership with more than 30 leading brands. Almoe caters to a vast network of dealers & resellers and is fully capable of delivering on diverse requirements, right from generalized to highly-specific client needs."
        videoSrc={video3}
      />

         <WeareVideo
        title="Solution & Integration"
        description="At Almoe Digital Solutions, we have the ability to design, implement and support the right components needed to create a technologically dynamic environment. We provide end-to-end solutions from pre-sales consultancy to designing, procuring, installing, managing and servicing the site."
        videoSrc={video4}
      />

       <WeareVideo
        title="Service & Support"
        description="In today's evolving & volatile economy, businesses must ensure they are working with a dependable and responsive AV & I support provider to keep their technology up and running at all times. Our in-house Service Centre team boasts of highly qualified, technically trained & sound engineers who can extend full-fledged support to clients. We offer services like Annual Maintenance Contracts, Warranty Services, Spare Parts, Facility Management, New Business AV/IT Setup and many more."
        videoSrc={video5}
      />

    </>
  );
};

export default WhoWeAre;

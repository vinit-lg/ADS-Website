import CommonVideoBanner from "../../common/CommonVideoBanner";

export default function LabellersVideoBanner() {
  return (
    <CommonVideoBanner
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="/videos/labellers-poster.jpg"
      breadcrumb="Home › Products › Labellers"
      height={100}
      autoPlay={true}
      showDivider={true}
    />
  );
}

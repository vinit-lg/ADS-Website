import CommonVideoBanner from "../../../components/common/CommonVideoBanner";

export default function VideoCapturingVideoBanner() {
  return (
    <CommonVideoBanner
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="/videos/labellers-poster.jpg"
      breadcrumb="Home > Products > Video Capturing"
      height={100}
      autoPlay={true}
      showDivider={true}
    />
  );
}

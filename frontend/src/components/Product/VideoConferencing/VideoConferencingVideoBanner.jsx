import CommonVideoBanner from "../../../components/common/CommonVideoBanner";

export default function VideoConferencingVideoBanner() {
  return (
    <CommonVideoBanner
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="/videos/labellers-poster.jpg"
      breadcrumb="Home › Products › Point of Sale"
      height={100}
      autoPlay={true}
      showDivider={true}
    />
  );
}

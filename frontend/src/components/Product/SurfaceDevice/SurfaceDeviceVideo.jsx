import CommonVideoBanner from "../../../components/common/CommonVideoBanner";

export default function SurfaceDeviceVideo() {
  return (
    <CommonVideoBanner
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="/videos/labellers-poster.jpg"
      breadcrumb="Home › Products › Surface Devices"
      height={100}
      autoPlay={true}
      showDivider={true}
    />
  );
}

import CommonVideoBanner from "../../../components/common/CommonVideoBanner";

export default function BrotherVideoBanner() {
  return (
    <CommonVideoBanner
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="/videos/labellers-poster.jpg"
      breadcrumb="Home > Categories > All Categories > Brands > Brother"
      height={100}
      autoPlay={true}
      showDivider={true}
    />
  );
}

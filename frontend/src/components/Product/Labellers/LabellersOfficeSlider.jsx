import CommonBannerSlider from "../../common/CommonBannerSlider";

const slides = [
  { image: "/Products/Labellers/14.webp",  title: "PT–H110" },
  { image: "/Products/Labellers/15.webp", title: "PT–D200AR" },
  { image: "/Products/Labellers/16.webp",  title: "PT–P750W" },
  { image: "/Products/Labellers/19.webp",  title: "PT–H110" },
  { image: "/Products/Labellers/20.webp", title: "PT–D200AR" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
    { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-p750w.png",  title: "PT–P750W" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
    { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-p750w.png",  title: "PT–P750W" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
    { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-p750w.png",  title: "PT–P750W" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
  { image: "/imgs/pt-d200ar.png", title: "PT–D200AR" },
  { image: "/imgs/pt-h110.png",  title: "PT–H110" },
];

export default function LabellersOfficeSlider() {
  return (
    <CommonBannerSlider
      title="Office Use"
      bgImage="/Labellers/PRINTERS-02.webp"
      slides={slides}
      ctaLabel="Book a Demo Now"
      onCta={() => console.log("CTA click")}
      autoplay={false}
    />
  );
}

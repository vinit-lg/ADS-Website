import PointSaleBanner from "./PointSaleBanner";

export default function PointImageText() {
  return (
    <PointSaleBanner
      imageSrc="/Products/PointofSale/Point+of+Sale.webp"
      onCta={() => console.log("Request a call back")}
    />
  );
}

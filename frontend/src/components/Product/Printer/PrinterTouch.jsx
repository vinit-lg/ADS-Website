import ChargingCartQuote from "../../Product/ChargingCart/ChargingCartQuote";

export default function PrinterTouch() {
  return (
    <ChargingCartQuote
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      headline="So what are you waiting for?"
      ctaText="Get A Quote Now!"
      onCtaClick={() => window.location.assign("/contact")}
    />
  );
}

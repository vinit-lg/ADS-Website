import ChargingCartQuote from "../../Product/ChargingCart/ChargingCartQuote"

export default function PointinTouch() {
  return (
    <ChargingCartQuote
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      headline="Get in touch."
      ctaText="Enquire Now"
      onCtaClick={() => window.location.assign("/contact")}
    />
  );
}

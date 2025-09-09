import ChargingCartQuote from "../ChargingCart/ChargingCartQuote";

export default function PrinterQuotation() {
  return (
    <ChargingCartQuote
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      headline="Quality at the Best Price"
      ctaText="Get Quotation Now!"
      onCtaClick={() => window.location.assign("/contact")}
    />
  );
}

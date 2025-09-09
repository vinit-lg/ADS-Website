
import PrinterBanner from "./PrinterBanner";

export default function PrinterBannerContent() {
  return <PrinterBanner onRequestCallback={() => alert("We'll call you back!")} />;
}

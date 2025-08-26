import ScannerProductsCarousel from "./ScannerProductsCarousel";

const PrinterProducts = [
  { image: "/Brand/Avison/document.webp", name: "Document Scanner" },
  { image: "/Brand/Avison/Flatbed.webp", name: "Flatbed Scanner" },
  { image: "/Brand/Avison/Mobile.webp", name: "Mobile Scanner" },
 { image: "/Brand/Avison/document.webp", name: "Document Scanner" },
  { image: "/Brand/Avison/Flatbed.webp", name: "Flatbed Scanner" },
];

const ScannerProduct = () => (
  <ScannerProductsCarousel products={PrinterProducts} heading="Printer/MFP Products"/>
);

export default ScannerProduct;


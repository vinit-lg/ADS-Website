import React from "react";
import ScannerProductsCarousel from "./ScannerProductsCarousel";

const ScannerProducts = [
  { image: "/Brand/Avison/document.webp", name: "Document Scanner" },
  { image: "/Brand/Avison/Flatbed.webp", name: "Flatbed Scanner" },
  { image: "/Brand/Avison/Mobile.webp", name: "Mobile Scanner" },
 { image: "/Brand/Avison/document.webp", name: "Document Scanner" },
  { image: "/Brand/Avison/Flatbed.webp", name: "Flatbed Scanner" },
];

const ScannerProduct = () => (
  <ScannerProductsCarousel products={ScannerProducts} heading="Scanner Products"/>
);

export default ScannerProduct;

import BarcoClickShareCarousel from "./BarcoClickShareCarousel";

const barcoItems = [
  { image: "/Brand/Barco/c-5.webp", name: "Document Scanner" },
   { image: "/Brand/Barco/CX-20_top_button_transp.webp", name: "Document Scanner" },
   { image: "/Brand/Barco/CX-30_top_buttons.webp", name: "Document Scanner" },
  { image: "/Brand/Barco/c-5.webp", name: "Document Scanner" },
   { image: "/Brand/Barco/c-5.webp", name: "Document Scanner" },
];

const BarcoProduct = () => (
  <BarcoClickShareCarousel items={barcoItems} heading="Barco ClickShare Solutions"/>
);

export default BarcoProduct;

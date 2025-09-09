import AlmoeCommonSlider from "../../common/AlmoeCommonSlider";

const products = [
  { title: "ActiveFloor Pro 2", image: "/Products/Education/PRO2 (1).webp" },
  { title: "ActiveFloor Mobile Max", image: "/Products/Education/manico-funtable-green-1440x810-removebg-preview.webp" },
  { title: "Manico FunTable", image: "/Products/Education/MobileMax1-1.webp" },
   { title: "ActiveFloor Mobile Max", image: "/Products/Education/manico-funtable-green-1440x810-removebg-preview.webp" },
  { title: "Manico FunTable", image: "/Products/Education/MobileMax1-1.webp" },
    { title: "ActiveFloor Pro 2", image: "/Products/Education/PRO2 (1).webp" },
  { title: "ActiveFloor Mobile Max", image: "/Products/Education/manico-funtable-green-1440x810-removebg-preview.webp" },
    { title: "ActiveFloor Pro 2", image: "/Products/Education/PRO2 (1).webp" },
  { title: "ActiveFloor Mobile Max", image: "/Products/Education/manico-funtable-green-1440x810-removebg-preview.webp" },
];

export default function PrinterCadSlider() {
  return <AlmoeCommonSlider items={products} title="Large Format Printers CAD/GIS"/>;
}

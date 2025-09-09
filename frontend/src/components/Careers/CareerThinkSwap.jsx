import CareerThink from "../../components/Careers/CareerThink";
import img1 from "/AboutUs/Careers/unsplash-image-g1Kr4Ozfoac.webp";
import img2 from "/AboutUs/Careers/unsplash-image-g1Kr4Ozfoac.webp";

export default function CareerThinkSwap() {
  return (
    <>
      {/* First section: text left, image right */}
      <CareerThink image={img1} />

      {/* Second section: swap (text right, image left) */}
      <CareerThink image={img2} reverse />
    </>
  );
}

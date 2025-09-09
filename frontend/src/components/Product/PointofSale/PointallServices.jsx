import PointofService from "./PointofService";

const sections = [
  {
    title: "Self service Kiosks",
    text:
      "Enhance and streamline customer experiences with a purposefully-crafted, highly versatile self service solution. The HP Engage Express delivers powerful performance to move customers in and out quickly. This sleek footprint is highly customizable to configure the ideal solution for your business.",
    image: "/Products/PointofSale/All+in+One+pos.webp",
    ctaLabel: "Explore Now",
    onCta: () => console.log("Kiosks"),
    align: "left",
  },
  {
    title: "All-in-one POS systems",
    text:
      "Elegant, space-saving systems that combine compute and display to elevate checkout experiences.",
    image: "/Products/PointofSale/All+in+One+pos.webp",
    ctaLabel: "Explore Now",
    onCta: () => console.log("AIO"),
    align: "right",
  },

    {
    title: "All-in-one POS systems",
    text:
      "Elegant, space-saving systems that combine compute and display to elevate checkout experiences.",
    image: "/Products/PointofSale/All+in+One+pos.webp",
    ctaLabel: "Explore Now",
    onCta: () => console.log("AIO"),
    align: "right",
  },

    {
    title: "All-in-one POS systems",
    text:
      "Elegant, space-saving systems that combine compute and display to elevate checkout experiences.",
    image: "/Products/PointofSale/All+in+One+pos.webp",
    ctaLabel: "Explore Now",
    onCta: () => console.log("AIO"),
    align: "right",
  },

    {
    title: "All-in-one POS systems",
    text:
      "Elegant, space-saving systems that combine compute and display to elevate checkout experiences.",
    image: "/Products/PointofSale/All+in+One+pos.webp",
    ctaLabel: "Explore Now",
    onCta: () => console.log("AIO"),
    align: "right",
  },

];

export default function PointallServices() {
  return <PointofService sections={sections} />;
}

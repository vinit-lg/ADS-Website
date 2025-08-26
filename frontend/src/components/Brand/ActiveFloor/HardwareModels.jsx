import HardwareProductCarousel from "./HardwareProductCarousel";

const HardwareModel = [
  {
    image: "/Brand/ActiveFloor/activefloorOne.webp",
    name: "Document Scanner",
    desc: "Designed for young children and small spaces, this solution is perfect for daycares and preschools.",
  },
  {
   image: "/Brand/ActiveFloor/activefloorOne.webp",
    name: "Flatbed Scanner",
desc: "Designed for young children and small spaces, this solution is perfect for daycares and preschools.",
  },

    {
    image: "/Brand/ActiveFloor/activefloorOne.webp",
    name: "Document Scanner",
    desc: "Designed for young children and small spaces, this solution is perfect for daycares and preschools.",
  },
  {
     image: "/Brand/ActiveFloor/activefloorOne.webp",
    name: "Flatbed Scanner",
     desc: "Designed for young children and small spaces, this solution is perfect for daycares and preschools.",
  },

];

const HardwareModels = () => (
  <HardwareProductCarousel
    products={HardwareModel}
    heading="Explore Our Hardware Models"
    buttonLabel="Enquire Us Now"
    onButtonClick={() => { window.location.href = "/all-scanners"; }}
  />
);

export default HardwareModels;

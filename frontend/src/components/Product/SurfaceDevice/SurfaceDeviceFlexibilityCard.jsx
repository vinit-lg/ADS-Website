import SurfaceDeviceProCollection from "./SurfaceDeviceProCollection";

const items = [
  {
    id: "pro9",
    title: "Surface Pro 9",
    img: "/Products/SurfaceDevice/surface-go-3.webp",
    onClick: () => console.log("Pro 9"),
  },
  {
    id: "go3",
    title: "Surface Go 3",
  img: "/Products/SurfaceDevice/surface-go-3.webp",
    onClick: () => console.log("Go 3"),
  },
];

export default function SurfaceDevicesFlexibilityCard() {
  return (
    <SurfaceDeviceProCollection
      heading="2-in-1 flexibility to work your way"
      description="The iconic Kickstand transforms every Surface 2-in-1 from full touchscreen laptop with keyboard, portable tablet, digital canvas, to docked workstation. Optional 4G keeps you connected, and built-in security helps keep you protected."
      items={items}
    />
  );
}

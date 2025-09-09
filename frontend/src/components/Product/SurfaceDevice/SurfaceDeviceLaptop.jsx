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

    {
    id: "go3",
    title: "Surface Go 3",
  img: "/Products/SurfaceDevice/surface-go-3.webp",
    onClick: () => console.log("Go 3"),
  },
];

export default function SurfaceDeviceLaptop() {
  return (
    <SurfaceDeviceProCollection
      heading="Laptops that help you get it done"
      description="Surface Laptops pair performance to match any task with premium design. Find the right fit with a choice of screen sizes, comfortable, industry-leading keyboards, and security built in."
      items={items}
    />
  );
}

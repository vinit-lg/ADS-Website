import ProjectorsCollection from "./ProjectorsCollection";

const homeProducts = [
  {
    id: "co-w01",
    title: "Epson CO–W01",
    img: "/Products/Projectors/CO-WOL.webp",
  },
  {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
];

export default function ProjectorsPortableCollection() {
  return (
    <ProjectorsCollection
      title="Ultra-portable Projectors"
      description="Epson's ultra-portable projectors combine lightweight design with powerful performance, making them ideal for professionals on the go. These compact projectors offer easy transportation, quick setup, and versatile connectivity options, allowing you to present anywhere with confidence. Perfect for business presentations, travel, and impromptu meetings."
      products={homeProducts}
      onView={(id) => console.log("view", id)}
      onEnquire={() => console.log("enquire")}
      columns={{ desktop: 5, tablet: 3, mobile: 2, small: 1 }}
    />
  );
}

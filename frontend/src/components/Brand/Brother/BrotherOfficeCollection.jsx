import ProjectorsCollection from "../../Product/Projectors/ProjectorsCollection";

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
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
    {
    id: "eb-e20",
    title: "Epson EB–E20",
    img: "/Products/Projectors/CO-WOL.webp",
  },
];

export default function BrotherOfficeCollection() {
  return (
    <ProjectorsCollection
      title="Home & Office Usage"
      products={homeProducts}
      onView={(id) => console.log("view", id)}
      onEnquire={() => console.log("enquire")}
      columns={{ desktop: 5, tablet: 3, mobile: 2, small: 1 }}
    />
  );
}

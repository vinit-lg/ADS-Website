import ProjectorsCollection from "./ProjectorsCollection";

const homeProducts = [
  { id: "co-w01", title: "Epson CO–W01",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-e20", title: "Epson EB–E20",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-w51", title: "Epson EB–W51",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-x49", title: "EB–X49",        img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-992f", title: "Epson EB–992F", img: "/Products/Projectors/CO-WOL.webp"},
   { id: "co-w01", title: "Epson CO–W01",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-e20", title: "Epson EB–E20",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-w51", title: "Epson EB–W51",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-x49", title: "EB–X49",        img: "/Products/Projectors/CO-WOL.webp" },
     { id: "co-w01", title: "Epson CO–W01",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-e20", title: "Epson EB–E20",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-w51", title: "Epson EB–W51",  img: "/Products/Projectors/CO-WOL.webp" },
  { id: "eb-x49", title: "EB–X49",        img: "/Products/Projectors/CO-WOL.webp" },
];

export default function ProjectorsLaserCollection() {
  return (
    <ProjectorsCollection
      title="Laser Projectors"
      products={homeProducts}
      onView={(id) => console.log("view", id)}
      onEnquire={() => console.log("enquire")}
      columns={{ desktop: 5, tablet: 3, mobile: 2, small: 1 }}
    />
  );
}

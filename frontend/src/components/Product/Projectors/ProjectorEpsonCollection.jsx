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
  { id: "eb-992f", title: "Epson EB–992F", img: "/Products/Projectors/CO-WOL.webp"},
];

export default function ProjectorEpsonCollection() {
  return (
    <ProjectorsCollection
      title="Entry Level Projectors"
      description="Epson's entry-level projectors deliver high-quality visuals at an affordable price, making them perfect for small businesses and home entertainment. With features like high brightness and easy setup, these projectors ensure clear, vibrant images even in well-lit rooms. Enjoy reliable performance and excellent value with Epson's accessible projection solutions."
      products={homeProducts}
      onView={(id) => console.log("view", id)}
      onEnquire={() => console.log("enquire")}
      columns={{ desktop: 5, tablet: 3, mobile: 2, small: 1 }}
    />
  );
}

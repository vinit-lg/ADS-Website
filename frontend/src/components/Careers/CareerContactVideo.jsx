import CareerContact from "../../components/Careers/CareerContact";
const bgVideo = "https://www.w3schools.com/html/mov_bbb.mp4"
// import poster from "/assets/careers-bg.jpg";

export default function CareerContactVideo() {
  return <CareerContact videoSrc={bgVideo} onSubmit={(fd)=>console.log([...fd])} />;
}

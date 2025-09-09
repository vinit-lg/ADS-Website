import VideoCapturingImageCard from "./VideoCapturingImageCard";

export default function VideoCapturingHero() {
  return (
    <VideoCapturingImageCard
      leftImage="/Products/VideoCapturing/SWIVL+ROBOT.webp"
      rightImage="/Products/VideoCapturing/swivl.webp"
      leftLabel="Swivl Robot"
      rightLabel="Swivl Teams"
      onLeftClick={() => console.log("Robot")}
      onRightClick={() => console.log("Teams")}
    />
  );
}

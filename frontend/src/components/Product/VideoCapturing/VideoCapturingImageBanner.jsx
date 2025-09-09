import VideoCapturingBanner from "./VideoCapturingBanner";

export default function VideoCapturingImageBanner() {
  return (
    <VideoCapturingBanner
      title="Video Capturing"
      image="/Products/VideoCapturing/swivl+background.webp"
      buttonLabel="Request a Call Back"
      onButtonClick={() => console.log("Call-back requested")}
      height="640px"  
      overlay={true}          
      align="left"          
    />
  );
}

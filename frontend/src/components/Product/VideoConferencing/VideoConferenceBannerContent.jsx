import VideoConferencingBanner from "./VideoConferencingBanner";

export default function VideoConferencingBannerContent() {
  return (
    <VideoConferencingBanner
      title="Video Conferencing"
      buttonLabel="Request a Call Back"
      onButtonClick={() => console.log("Call back requested")}
    />
  );
}

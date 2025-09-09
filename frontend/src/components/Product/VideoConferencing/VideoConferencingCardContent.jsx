import VideoConferencingCard from "./VideoConferencingCard";

export default function VideoConferencingCardContent() {
  const items = [
    { id: "cameras", label: "Conference Cameras", onClick: () => console.log("Cameras") },
    { id: "room", label: "Conference Room Solutions", onClick: () => console.log("Room") },
    { id: "webcams", label: "Webcams", onClick: () => console.log("Webcams") },
    { id: "headsets", label: "Audio Conferencing Headsets", onClick: () => console.log("Headsets") },
    { id: "accessories", label: "Video Conferencing Accessories", onClick: () => console.log("Accessories") },
  ];

  return <VideoConferencingCard items={items} />;
}

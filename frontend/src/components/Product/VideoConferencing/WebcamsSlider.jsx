import ConferenceCameraSlider from "./ConferenceCameraSlider";

const cameras = [
  { id: "rally",   title: "Rally Camera", img: "/Products/VideoConferencing/1.webp" },
  { id: "meetup",  title: "MEETUP",img: "/Products/VideoConferencing/1.webp" },
  { id: "ptz2",    title: "PTZ PRO 2", img: "/Products/VideoConferencing/1.webp"  },
  { id: "group",   title: "GROUP",  img: "/Products/VideoConferencing/1.webp"  },
  { id: "connect", title: "CONNECT", img: "/Products/VideoConferencing/1.webp" },
    { id: "rally",   title: "Rally Camera", img: "/Products/VideoConferencing/1.webp" },
  { id: "meetup",  title: "MEETUP",img: "/Products/VideoConferencing/1.webp" },
  { id: "ptz2",    title: "PTZ PRO 2", img: "/Products/VideoConferencing/1.webp"  },
  { id: "group",   title: "GROUP",  img: "/Products/VideoConferencing/1.webp"  },
  { id: "connect", title: "CONNECT", img: "/Products/VideoConferencing/1.webp" },
    { id: "rally",   title: "Rally Camera", img: "/Products/VideoConferencing/1.webp" },
  { id: "meetup",  title: "MEETUP",img: "/Products/VideoConferencing/1.webp" },
  { id: "ptz2",    title: "PTZ PRO 2", img: "/Products/VideoConferencing/1.webp"  },
  { id: "group",   title: "GROUP",  img: "/Products/VideoConferencing/1.webp"  },
  { id: "connect", title: "CONNECT", img: "/Products/VideoConferencing/1.webp" },
];

export default function WebcamsSlider() {
  return (
    <ConferenceCameraSlider
      title="Webcams"
      items={cameras}
      onCTAClick={() => console.log("demo")}
    />
  );
}

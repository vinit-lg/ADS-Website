import ConferenceCameraSlider from "../../../components/Product/VideoConferencing/ConferenceCameraSlider";

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

export default function ClassroomEducationSlider() {
  return (
    <ConferenceCameraSlider
      title="Taking Education To The Next Level"
      items={cameras}
      onCTAClick={() => console.log("demo")}
    />
  );
}

import ContactNow from "../../common/ContactNow";

export default function ActiveClassroomContact() {
  return (
    <ContactNow
      title={"Experience the power of\ninteractive learning with Almoe"}
      buttonLabel="Get a Quote Now"
      onClick={() => console.log("Quote requested")}
      bgImage="/Solutions/ActiveClassroomSolutions/Solutions+Pages-06.webp"
      decorImage="/assets/hero-yellow-decor.png"
      minHeight="540px"
      overlay={0.35}
      showUnderline={true}
    />
  );
}

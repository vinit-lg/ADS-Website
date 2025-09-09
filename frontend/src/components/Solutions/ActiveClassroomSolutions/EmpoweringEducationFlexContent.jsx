import EmpoweringEducationFlex from "./EmpoweringEducationFlex";

export default function EmpoweringEducationFlexContent() {
  return (
    <EmpoweringEducationFlex
      image="/Solutions/ActiveClassroomSolutions/pexels-max-fischer-5212700.webp"
      bgImage="/Solutions/ActiveClassroomSolutions/AUTO+ID+SOLUTION-05.webp"
      buttonLabel="Discover Our Products"
      onButtonClick={() => alert("CTA clicked!")}
    />
  );
}

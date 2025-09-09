import EductaionBanner from "../../../components/Product/Education/EducationBanner";
import EductaionHero from "../../../components/Product/Education/EducationHero";
import InteractiveEducation from "../../../components/Product/Education/InteractiveEducation";
import EducationContactUs from "../../../components/Product/Education/EducationContactUs";
import EducationImageContent from "../../../components/Product/Education/EducationImageContent";
import EducationProductSlider from "../../../components/Product/Education/EducationProductSlider";
import EducationEnquire from "../../../components/Product/Education/EducationEnquire";

import React from 'react'

function Education() {
  return (
    <>
    <EductaionBanner />
    < EductaionHero />
    <InteractiveEducation />
    <EducationContactUs />
    <EducationImageContent />
    <EducationProductSlider />
    <EducationEnquire />
    </>
  )
}

export default Education
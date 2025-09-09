import ProjectorBanner from "../../../components/Product/Projectors/ProjectorsBanner";
import ProjectorRangeBox from "../../../components/Product/Projectors/ProjectorRangeBox";
import ProjectorVideoBanner from "../../../components/Product/Projectors/ProjectorVideoBanner";
import ProjectorEpsonCollection from "../../../components/Product/Projectors/ProjectorEpsonCollection";
import ProjectorsPortableCollection from "../../../components/Product/Projectors/ProjectorsPortableCollection";
import ProjectorsCinemaCollection from "../../../components/Product/Projectors/ProjectorsCinemaCollection";
import ProjectorsEducationCollection from "../../../components/Product/Projectors/ProjectorsEductaionCollection";
import ProjectorsQuotation from "../../../components/Product/Projectors/ProjectorsQuotation";
import ProjectorsLaserCollection from "../../../components/Product/Projectors/ProjectorsLaserCollection";
import ProjectorsContact from "../../../components/Product/Projectors/ProjectorsConatct";

function Projectors() {
  return (
    <>
    <ProjectorBanner />
    < ProjectorRangeBox  />
    <ProjectorVideoBanner />
    <ProjectorEpsonCollection />
    <ProjectorsPortableCollection />
    < ProjectorsCinemaCollection />
    <ProjectorsEducationCollection />
    <ProjectorsQuotation />
    <ProjectorsLaserCollection  />
    <ProjectorsContact  />
    </>
  )
}

export default Projectors
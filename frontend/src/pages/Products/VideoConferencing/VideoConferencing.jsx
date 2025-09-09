import VideoConferencingBannerContent from "../../../components/Product/VideoConferencing/VideoConferenceBannerContent";
import VideoConferencingCardContent from "../../../components/Product/VideoConferencing/VideoConferencingCardContent";
import VideoConferencingVideoBanner from "../../../components/Product/VideoConferencing/VideoConferencingVideoBanner";
import VideoConferenceCamera from "../../../components/Product/VideoConferencing/VideoConferenceCamera";
import VideoConferenceRoom from "../../../components/Product/VideoConferencing/VideoConferenceRoom";
import VideoConferenceQuote from "../../../components/Product/VideoConferencing/VideoConferenceQuote";
import WebcamsSlider from "../../../components/Product/VideoConferencing/WebcamsSlider";
import AudioConferencingSlider from "../../../components/Product/VideoConferencing/AudioConferencingSlider";
import VideoConferencingAccessoriesSlider from "../../../components/Product/VideoConferencing/VideoConferencingAccessoriesSlider";
import VideoConferenceEnquire from "../../../components/Product/VideoConferencing/VideoConferenceEnquire";
export default function VideoConferencing() {
  return (
    <>
      <VideoConferencingBannerContent />
      < VideoConferencingCardContent />
      < VideoConferencingVideoBanner />
      <VideoConferenceCamera />
      <VideoConferenceRoom />
      <VideoConferenceQuote />
      <WebcamsSlider /> 
      <AudioConferencingSlider /> 
      <VideoConferencingAccessoriesSlider />
      <VideoConferenceEnquire />
    </>
  )
}

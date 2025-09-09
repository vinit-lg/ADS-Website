import SurfaceDeviceBanner from "../../../components/Product/SurfaceDevice/SurfaceDeviceBanner";
import SurfaceDeviceContentSection from "../../../components/Product/SurfaceDevice/SurfaceDeviceContentSection";
import SurfaceDeviceVideo from "../../../components/Product/SurfaceDevice/SurfaceDeviceVideo.JSX";
import SurfaceDeviceProSection from "../../../components/Product/SurfaceDevice/SurfaceDeviceProSection";
import SurfaceDevicesFlexibilityCard from "../../../components/Product/SurfaceDevice/SurfaceDeviceFlexibilityCard";
import SurfaceDeviceTouch from "../../../components/Product/SurfaceDevice/SurfaceDeviceTouch";
import SurfaceDeviceLaptop from "../../../components/Product/SurfaceDevice/SurfaceDeviceLaptop";


function SurfaceDevice() {
  return (
    <>
    <SurfaceDeviceBanner />
    <SurfaceDeviceContentSection  />
    <SurfaceDeviceVideo />
    <SurfaceDeviceProSection  />
    <SurfaceDevicesFlexibilityCard />
    <SurfaceDeviceTouch />
    <SurfaceDeviceLaptop />
   </>
  )
}

export default SurfaceDevice
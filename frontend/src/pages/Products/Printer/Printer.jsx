import PrinterBannerContent from "../../../components/Product/Printer/PrinterBannerContent";
import PrinterBox from "../../../components/Product/Printer/PrinterBox";
import PrinterVideoBanner from "../../../components/Product/Printer/PrinterVideoBanner";
import PrinterWorkforceSlider from "../../../components/Product/Printer/PrinterWorkforceSlider";
import PrinterQuotation from "../../../components/Product/Printer/PrinterQuotation";
import FormatPrinterSlider from "../../../components/Product/Printer/FormatPrinterSlider";
import PrinterCadSlider from "../../../components/Product/Printer/PrinterCadSlider";
import PrinterColorWorksSlider from "../../../components/Product/Printer/PrinterColorWorksSlider";
import PrinterReciptSlider from "../../../components/Product/Printer/PrinterReciptSlider";
import WorkforceScannerSlider from "../../../components/Product/Printer/WorkforceScannerSlider";
import PrinterTouch from "../../../components/Product/Printer/PrinterTouch";
function Printer() {
  return (
    <>
     <PrinterBannerContent />
     <PrinterBox />
     <PrinterVideoBanner />
     <PrinterWorkforceSlider  />
     <PrinterQuotation />
     <FormatPrinterSlider  />
     <PrinterCadSlider />
     <PrinterColorWorksSlider />
     < PrinterReciptSlider />
     <WorkforceScannerSlider />
     <PrinterTouch />
    </>
  )
}

export default Printer
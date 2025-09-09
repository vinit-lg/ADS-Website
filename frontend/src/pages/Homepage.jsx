import HeroSection from '../components/Homepage/HeroSection';
import StatsHighlights from '../components/Homepage/StatsHighlights';
import AboutSection from '../components/Homepage/AboutSection';
import BrandSlider from '../components/Homepage/BrandSlider';
import TechnologyPartner from '../components/Homepage/TechnologyPartner';
import NewsEvents from '../components/Homepage/NewsEvents';
import Testimonials from '../components/Homepage/Testimonials';
import ClientContact from '../components/Homepage/ClientContact';


function Homepage() {
  return (
    <>
      <HeroSection />
       <StatsHighlights />
       <AboutSection />
      <BrandSlider />
       <TechnologyPartner/>
      <NewsEvents />
       <Testimonials />
       <ClientContact />
    </>
  );
}

export default Homepage;

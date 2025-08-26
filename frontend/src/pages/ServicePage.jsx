import React from "react";
import ServicesBanner from "../components/Servicepage/ServiceBanner";
import ServiceHighlights from "../components/Servicepage/ServiceHighlights";
import ServiceCard from "../components/Servicepage/ServiceCard";
import ServiceDetails from "../components/Servicepage/ServiceDetails";
import GetInTouch from "../components/Servicepage/GetInTouch";


function ServicesPage() {
  return (
    <>
        <ServicesBanner />
        <ServiceHighlights />
        <ServiceCard />
        <ServiceDetails />
        <GetInTouch />
    </>
  );
}

export default ServicesPage;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/theme.css";
import "./styles/button.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import Sustainability from "./pages/Sustainability";
import WhoWeAre from "./pages/AboutUs/WhoWeAre";
import Careers from "./pages/Careers";
import PatnerWithUsEnquiry from "./pages/InquiryAssistance/PatnerWithUsEnquiry";
import ProductAndSolutionsEnquiry from "./pages/InquiryAssistance/ProductAndSolutionsEnquiry";
import ProductSupportEnquiry from "./pages/InquiryAssistance/ProductSupportEnquiry";
import ActiveClassroomsolutions from "./pages/Solutions/ActiveClassroomSolutions/ActiveClassroomsolutions";

/* IMPORT ROUTE FRAGMENTS */
import { brandRoutes } from "./routes/BrandsRoutes";
import { productRoutes } from "./routes/ProductsRoutes";

function NotFound() {
  return <div>404 - Page not found</div>;
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Top-level public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions/active-classroom-solutions" element={<ActiveClassroomsolutions />} />
          <Route path="/patner-with-us" element={<PatnerWithUsEnquiry />} />
            <Route path="/product-and-solutions-enquiry" element={<ProductAndSolutionsEnquiry  />} />
              <Route path="/product-support-enquiry" element={<ProductSupportEnquiry />} />

        {/* Inject route fragments (these are JSX <Route> elements) */}
        {brandRoutes}
        {productRoutes}

        {/* Legacy redirects (optional) */}
        <Route path="/activefloor" element={<Navigate to="/brands/activefloor" replace />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

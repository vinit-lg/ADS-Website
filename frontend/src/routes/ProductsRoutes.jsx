// src/routes/ProductsRoutes.jsx
import React from "react";
import { Route, Link, Outlet, Navigate } from "react-router-dom";

import Apple from "../pages/Products/Apple/Apple";
import CollaborationHub from "../pages/Products/CollaborationHub/CollaborationHub";
import ChargingCart from "../pages/Products/ChargingCart/ChargingCart";
import Education from "../pages/Products/Education/Education";
import Labellers from "../pages/Products/Labellers/Labellers";
import PointofSale from "../pages/Products/PointofSale/PointofSale";
import Projectors from "../pages/Products/Projectors/Projectors";
import Printer from "../pages/Products/Printer/Printer";
import SurfaceDevice from "../pages/Products/SurfaceDevice/SurfaceDevice";
import VideoCapturing from "../pages/Products/VideoCapturing/VideoCapturing";
import VideoConferencing from "../pages/Products/VideoConferencing/VideoConferencing";

function ProductsLayout() {
  return (
    <div className="products-layout">
        <Outlet />
      </div>
  );
}

function ProductsIndex() {
  return (
    <div>
      <h2>All products</h2>
      <ul>
       <li><Link to="/products/apple-devices">Apple Devices</Link></li>
        <li><Link to="/products/collaboration-hub">Collaboration Hub</Link></li>
        <li><Link to="/products/charging-carts-cases">Charging Cart Cases</Link></li>
        <li><Link to="/products/education">Education</Link></li>
        <li><Link to="/products/labellers">Labellers</Link></li>
        <li><Link to="/products/point-of-sale-product">Point of Sale Product</Link></li>
        <li><Link to="/products/printers">Printers</Link></li>
        <li><Link to="/products/projectors">Projectors</Link></li>
        <li><Link to="/products/surface-devices">Surface Devices</Link></li>
        <li><Link to="/products/video-capturing">Video Capturing</Link></li>
        <li><Link to="/products/video-conferencing">Video Conferencing</Link></li>
      </ul>
    </div>
  );
}

export const productRoutes = (
  <>
    <Route path="/products" element={<ProductsLayout />}>
      <Route index element={<ProductsIndex />} />
      <Route path="/products/apple-devices" element={<Apple />} />
      <Route path="/products/collaboration-hub" element={<CollaborationHub />} />
      <Route path="/products/charging-carts-cases" element={<ChargingCart />} />
      <Route path="/products/education" element={<Education />} />
      <Route path="/products/labellers" element={<Labellers />} />
      <Route path="/products/point-of-sale-product" element={<PointofSale />} />
      <Route path="/products/printers" element={<Printer />} />
      <Route path="/products/projectors" element={<Projectors />} />
      <Route path="/products/surface-devices" element={<SurfaceDevice />} />
      <Route path="/products/video-capturing" element={<VideoCapturing />} />
      <Route path="/products/video-conferencing" element={<VideoConferencing />} />
    </Route>

    {/* optional legacy redirects */}
    <Route path="/categories/all-categories/products/apple-devices" element={<Navigate to="/products/apple-devices" replace />} />
  </>
);

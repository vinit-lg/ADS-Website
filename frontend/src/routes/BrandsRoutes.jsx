// src/routes/BrandsRoutes.jsx
import React from "react";
import { Route, Outlet, Navigate, Link} from "react-router-dom";

import Avison from "../pages/Brand/Avison/Avison";
import ActiveFloor from "../pages/Brand/ActiveFloor/ActiveFloor";
import Barco from "../pages/Brand/Barco/Barco";
import Brother from "../pages/Brand/Brother/Brother";
import Circularo from "../pages/Brand/Circularo/Circularo";
import Draper from "../pages/Brand/Draper/Draper";

function BrandsLayout() {
  return (
    <div>
      {/* Only render child routes */}
      <Outlet />
    </div>
  );
}

function BrandsIndex() {
  return (
    <div>
      <ul>
        <li><Link to="/brands/avison">Avison</Link></li>
        <li><Link to="/brands/activefloor">Active Floor</Link></li>
        <li><Link to="/brands/barco">Barco</Link></li>
         <li><Link to="/brands/brother">Brother</Link></li>
           <li><Link to="/brands/circularo">Brother</Link></li>
            <li><Link to="/brands/draper">Brother</Link></li>
      </ul>
    </div>
  );
}

/* Export a JSX fragment (Route elements) — NOT a React component */
export const brandRoutes = (
  <>
    <Route path="/brands" element={<BrandsLayout />}>
      <Route index element={<BrandsIndex />} />
      <Route path="avison" element={<Avison />} />
      <Route path="activefloor" element={<ActiveFloor />} />
      <Route path="barco" element={<Barco />} />
      <Route path="brother" element={<Brother />} />
       <Route path="Circularo" element={<Circularo  />} />
         <Route path="draper" element={<Draper  />} />
      {/* optional generic slug: <Route path=":brandSlug" element={<BrandGeneric />} /> */}
    </Route>

    {/* Legacy redirects (optional) */}
    <Route
      path="/categories/all-categories/brands/avison"
      element={<Navigate to="/brands/avison" replace />}
    />
    <Route
      path="/categories/all-categories/brands/barco"
      element={<Navigate to="/brands/barco" replace />}
    />
  </>
);

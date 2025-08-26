// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Logout from './components/Logout';
import Homepage from './pages/Homepage';
import ServicePage from './pages/ServicePage';
import Sustainability from './pages/Sustainability';
import WhoWeAre from './pages/AboutUs/WhoWeAre';
import Avison from './pages/Brand/Avison/Avison'
import ActiveFloor from './pages/Brand/ActiveFloor/ActiveFloor'
import Barco from './pages/Brand/Barco/Barco';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/admin/login" />;
};


function App() {
  return (
    <Router>
         <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
       <Route path="/services" element={<ServicePage />} />
       <Route path="/sustainability" element={<Sustainability />} />
       <Route path="/who-we-are" element={<WhoWeAre />} />
       <Route path="/avison" element={<Avison />} />
        <Route path="/activefloor" element={<ActiveFloor />} />
        <Route path="/barco" element={<Barco />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/logout" element={<Logout />} />
         <Route path="/admin" element={
    <PrivateRoute>
      <AdminPanel />
    </PrivateRoute>
  } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

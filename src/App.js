import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Home from "./Components/Menu/Home/Home";
import Contact from "./Components/Menu/Contact/Contact";
import About from "./Components/Menu/About/About";
import MenuBar from "./Components/Menu/MenuBar/MenuBar";
import Footer from "./Components/Menu/Footer/Footer";
import ProjectManagement from "./Components/Menu/ProjectsPages/ProjectManagement";
import AssestManagement from "./Components/Menu/ProjectsPages/AssestManagement";
import DrillingServices from "./Components/Menu/ProjectsPages/DrillingServices";
import IntegratedSupport from "./Components/Menu/ProjectsPages/IntegratedSupport";
import OilFieldSupplies from "./Components/Menu/ProjectsPages/OilFieldSupplies";
import Sustainability from "./Components/Menu/Sustainability/Sustainability";
import GlobalReach from "./Components/Menu/GlobalReach/GlobalReach";
import SupplyChain from "./Components/Menu/SupplyChain/SupplyChain";
import BestSteelSupplier from "./Components/Menu/ProjectsPages/BestSteelSupplier";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <div className="body-bg-image-old">
        <BrowserRouter>
          <div>
            <MenuBar />
          </div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/sustainability" element={<Sustainability />} />

            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/assest-management" element={<AssestManagement />} />
            <Route path="/drilling-services" element={<DrillingServices />} />
            <Route path="/integrated-support" element={<IntegratedSupport />} />
            <Route path="/oil-Field-supplies" element={<OilFieldSupplies />} />
            <Route
              path="/best-steel-supplier"
              element={<BestSteelSupplier />}
            />
            <Route path="/menubar" element={<MenuBar />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;

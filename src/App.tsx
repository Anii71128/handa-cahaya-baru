import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Rental from "./pages/Rental";
import Civil from "./pages/Civil";
import Service from "./pages/Services";
import Procurement from "./pages/Procurement";
import Projects from "./pages/Projects";
import MechanicalElectrical from "./pages/MechanicalElectrical";
import Boomlift from "./pages/Boomlift";
import Scissorlift from "./pages/Scissorlift";
import Yapcrane from "./pages/Yapcrane";
import TMC from "./pages/TMC";
import MobilCrane from "./pages/MobilCrane";
import Manlift from "./pages/Manlift";
import Purchasing from "./pages/Purchasing";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/tentang" element={<About />} />

          <Route path="/layanan" element={<Services />} />
          <Route path="/layanan/sewa-alat-berat" element={<Rental />} />
          <Route path="/layanan/project" element={<Projects />} />
          <Route path="/layanan/sipil" element={<Civil />} />
          <Route path="/layanan/service" element={<Service />} />
          <Route path="/layanan/pengadaan" element={<Procurement />} />

          <Route path="/me" element={<MechanicalElectrical />} />
          <Route path="/me/boomlift" element={<Boomlift />} />
          <Route path="/me/scissorlift" element={<Scissorlift />} />
          <Route path="/me/yapcrane" element={<Yapcrane />} />
          <Route path="/me/tmc" element={<TMC />} />
          <Route path="/me/mobil-crane" element={<MobilCrane />} />
          <Route path="/me/manlift" element={<Manlift />} />

          <Route path="/purchasing" element={<Purchasing />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/kontak" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

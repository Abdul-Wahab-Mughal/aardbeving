import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

import ImgTraject from "./page/ImgTraject";
import NCGTraject from "./page/NCGTraject";
import DuurzaamHerstel from "./page/DuurzaamHerstel";
import VastlopendeTrajecten from "./page/VastlopendeTrajecten";
import OverAAB from "./page/OverAAB";
import NotFound from "./page/NotFound";
import Index from "./page";

const navItems = [
  { label: "Home", path: "/" },
  { label: "IMG-Traject", path: "/img-traject" },
  { label: "NCG-Traject", path: "/ncg-traject" },
  { label: "Duurzaam herstel", path: "/duurzaam-herstel" },
  { label: "Vastgelopen trajecten", path: "/vastgelopen-trajecten" },
  { label: "Over AAB", path: "/over-aab" },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header navItems={navItems} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/img-traject" element={<ImgTraject />} />
        <Route path="/ncg-traject" element={<NCGTraject />} />
        <Route path="/duurzaam-herstel" element={<DuurzaamHerstel />} />
        <Route
          path="/vastgelopen-trajecten"
          element={<VastlopendeTrajecten />}
        />
        <Route path="/over-aab" element={<OverAAB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer navItems={navItems} />
    </BrowserRouter>
  );
}

export default App;

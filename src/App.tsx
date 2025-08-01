import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Marketing";
import WebService from "./pages/WebService";
import AboutUs from "./pages/AboutUs";
import Technology from "./pages/Technology";
import Design from "./pages/Design";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Aboutus" element={<AboutUs />} />

        {/* Marketing Service Details Pages */}
        <Route path="/marketing/brand-strategy" element={<WebService />} />
        <Route
          path="/marketing/social-media-management"
          element={<WebService />}
        />
        <Route path="/marketing/seo-audit-and-setup" element={<WebService />} />
        <Route
          path="/marketing/digital-marketing-consulting"
          element={<WebService />}
        />
        <Route
          path="/marketing/social-media-advertising"
          element={<WebService />}
        />
        <Route
          path="/marketing/brand-strategy-sample"
          element={<WebService />}
        />
        <Route path="/technology/WebService" element={<WebService />} />
      </Routes>
    </Router>
  );
}

export default App;

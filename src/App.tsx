import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Merketing";
import WebService from "./pages/WebService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketing" element={<Marketing />} />

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
        <Route path="/Webservice" element={<WebService />} />
      </Routes>
    </Router>
  );
}

export default App;

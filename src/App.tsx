import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Merketing";
import ServiceDetailsSample from "./pages/ServiceDetailsSample";
import WebService from "./pages/WebService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/services/:slug" element={<ServiceDetailsSample />} />
                <Route path="/Webservice" element={<WebService />} />
      </Routes>
    </Router>
  );
}

export default App;

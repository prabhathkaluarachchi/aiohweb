import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Merketing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketing" element={<Marketing />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../pages/contato";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
